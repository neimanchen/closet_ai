const Sequelize = require('sequelize');
const seed = require('./seedData.js');
const fakeData = require('./fakeData.js');
const faker = require('faker');

if (process.env.DATABASE_URL !== undefined) {
  var db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging:  true
  })
} else {
  var db = new Sequelize('closet_ai', 'closet_ai', 'shelfExpress', {
    host: 'localhost',
    dialect: 'postgres'
  })
}

// Check for db connection
db.authenticate()
  .then(() => {
    console.log('Connected to closet_ai');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Models for schema creation. TODO: factor out later.
const User = db.define('users', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING, unique: true },
  hash: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING },
  zip: { type: Sequelize.STRING },
  workZip: { type: Sequelize.STRING },
  birthDate: { type: Sequelize.DATEONLY },
  closetIdsFollowed: { type: Sequelize.ARRAY(Sequelize.INTEGER) }
});
const Item = db.define('items', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  brandName: { type: Sequelize.STRING },
  itemName: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  size: { type: Sequelize.STRING },
  sku: { type: Sequelize.STRING },
  s3PublicUrl: { type: Sequelize.STRING },
  price: { type: Sequelize.INTEGER },
  lastWornDate: { type: Sequelize.DATEONLY },
  isFavorite: { type: Sequelize.BOOLEAN },
  timesWorn: { type: Sequelize.INTEGER },
  maxTimesBeforeWash: { type: Sequelize.INTEGER },
  isClean: { type: Sequelize.BOOLEAN },
  purchaseDate: { type: Sequelize.DATEONLY }
});
const Closet = db.define('closets', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  isPrivate: { type: Sequelize.BOOLEAN }
});
const Outfit = db.define('outfits', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  isFavorite: { type: Sequelize.BOOLEAN },
  s3PublicUrl: { type: Sequelize.STRING },
});
const Category = db.define('categories', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  gender: { type: Sequelize.STRING },
});
const Style = db.define('styles', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  gender: { type: Sequelize.STRING },
});
const Season = db.define('seasons', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  tempRange: { type: Sequelize.RANGE(Sequelize.INTEGER) }
});
const Color = db.define('colors', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING }
});
const Calendar = db.define('calendar', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  date: { type: Sequelize.DATE }
});
const OutfitItem = db.define('outfitsItems', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  itemId: { type: Sequelize.INTEGER },
  outfitId: { type: Sequelize.INTEGER }
});
User.hasOne(Closet);
Closet.belongsTo(User);
Closet.hasMany(Item);
Item.belongsTo(Closet);
Color.hasMany(Item);
Item.belongsTo(Color);
Style.hasMany(Item);
Item.belongsTo(Style);
Category.hasMany(Style);
Style.belongsTo(Category);
Outfit.hasMany(Calendar);
Calendar.belongsTo(Outfit);
Item.belongsToMany(Outfit, { through: OutfitItem });
Outfit.belongsToMany(Item, { through: OutfitItem });
Style.belongsToMany(Season, {through: 'StyleSeason' });
Season.belongsToMany(Style, { through: 'StyleSeason' });

/* promise chain is required to ensure tables are created in the correct sequence so that associations can be set up
 properly. tables should be sync'd in the following order: category, user, closet, item, calendar, outfit, style,
  season, outfits_items, styles_seasons
  */
db.sync()
  .then(() => Category.sync())
  .then(() => User.sync())
  .then(() => Closet.sync())
  .then(()=> Color.sync())
  .then(() => Item.sync())
  .then(() => Outfit.sync())
  .then(() => Calendar.sync())
  .then(() => Style.sync())
  .then(() => Season.sync());

const dbHelpers = {
  seedColors: async () => {
    for (let i = 0; i < seed.colors.length; i++) {
      await Color.create({
        name: seed.colors[i]
      });
    }
  },
  seedSeasons: async () => { // TODO: allow for customizing of temp range
    let seasonsKeys = Object.keys(seed.seasons); // ['Winter', 'Spring', 'Summer', 'Fall']
    for (let i = 0; i < seasonsKeys.length; i++) {
      await Season.create({
        name: seasonsKeys[i], tempRange: seed.seasons[seasonsKeys[i]] // range associated with each season
      });
    }
  },
  seedCategories: async () => {
    let categoriesKeys = Object.keys(seed.categories); // ['Both', 'Women', 'Men']
    for (let i = 0; i < categoriesKeys.length; i++) {
      for (let j = 0; j < seed.categories[categoriesKeys[i]].length; j++) {
        await Category.create({
          name: seed.categories[categoriesKeys[i]][j], gender: categoriesKeys[i]
        });
      }
    }
  },
  seedStyles: async () => {
    let genders = Object.keys(seed.styles);
    for (const gender of genders) {
      let categories = Object.keys(seed.styles[gender]);
      for (const category of categories) {
        let categoryModel = await
        Category.findOne({where: {name: category}});
        let styles = seed.styles[gender][category];
        for (const style of styles) {
          let styleModel = await Style.create({
            name: style, gender: gender
          });
          await styleModel.setCategory(categoryModel);
        }
      }
    }
  },
  createDB: async () => {
    await db.sync();
    await dbHelpers.seedCategories();
    await dbHelpers.seedSeasons();
    await dbHelpers.seedColors();
    await dbHelpers.seedStyles();
    await dbHelpers.genFakeData();
  },
  // If used, invoke createDB to seed db
  dropTables: () => {
    return db.drop();
  },
  clearTables: () => {
    Season.findAll().then(seasons => seasons.forEach(season => season.destroy()));
    Style.findAll().then(styles => styles.forEach(style => style.destroy()));
    User.findAll().then(users => users.forEach(user => user.destroy()));
    Closet.findAll().then(closets => closets.forEach(closet => closet.destroy()));
    Outfit.findAll().then(outfits => outfits.forEach(outfit => outfit.destroy()));
    Calendar.findAll().then(calendars => calendars.forEach(calendar => calendar.destroy()));
    Item.findAll().then(items => items.forEach(item => item.destroy()));
    Category.findAll().then(categories => categories.forEach(category => category.destroy()));
  },
  genFakeData: async () => {
    // const outfitProperties = {
    //   name: 'outfit',
    //   isFavorite: true,
    //   s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/11/_101901771.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90'
    // };
    let stylesModels = await Style.findAll();
    let colorsModels = await Color.findAll();
    let booleans = [true, false];
    let maxWashTimes = [1, 2];
    let userInstance = await User.create(fakeData.user);
    let closetInstance = await Closet.create(fakeData.closet);
    await closetInstance.setUser(userInstance);
    // dbHelpers.addOutfit(fakeData.items, outfitProperties, 1);
    // change the for condition to adjust count of fake items created.
    for (let i = 0; i < 100; i++ ) {
      let itemInstance = await Item.create({
        brandName: faker.company.companyName(),
        itemName: faker.commerce.productName(),
        description: faker.commerce.productAdjective(),
        size: 'M',
        sku: faker.finance.iban(),
        s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/12/_103424572.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
        price: parseInt(faker.finance.amount()),
        lastWornDate: faker.date.recent(),
        isFavorite: booleans[Math.floor(Math.random() * booleans.length)],
        timesWorn: faker.random.number(),
        maxTimesBeforeWash: maxWashTimes[Math.floor(Math.random() * maxWashTimes.length)],
        isClean: booleans[Math.floor(Math.random() * booleans.length)],
        purchaseDate: faker.date.recent()
      });
      itemInstance.setCloset(closetInstance);
      itemInstance.setColor(colorsModels[Math.floor(Math.random() * colorsModels.length)]);
      itemInstance.setStyle(stylesModels[Math.floor(Math.random() * stylesModels.length)])
    }
  },
  sortAndFilterData: ((arr) => {
    return arr.sort((a, b) =>
    a < b ? -1: 1
    ).filter(function(item, index, arr) {
      return !index || item !== arr[index - 1];
    }).map(function(item) {
      return {key: item, value: item, text: item};
    });
  }),

  getItems: (data, cb) => {
    let organizedData = {};
    organizedData.items = {};
    organizedData.categories = [];
    organizedData.colors = [];
    organizedData.brands = [];
    organizedData.rawCategories = [];
    organizedData.rawColors = [];
    organizedData.rawBrands = [];
    db.query(
      'SELECT ' +
      'i.id, i."itemName" as name, ' +
        'i."brandName" as brand, ' +
        'i."s3PublicUrl" as url, ' +
      'c.name as category, ' +
      'colors.name as color, ' +
      'colors.id as colorId, ' +
        'i."styleId" as style ' +
      'FROM items i ' +
      'JOIN styles s ON (i."styleId" = s.id) ' +
      'INNER JOIN categories c ON (c.id = s."categoryId") ' +
      'JOIN colors ON (colors.id = i."colorId"); ' +
      'SELECT DISTINCT c.name as category from items i, categories c ' +
      'JOIN styles s ON (s."categoryId" = c.id) ' +
      'INNER JOIN categories ON (c.id = s."categoryId"); ' +
      'SELECT DISTINCT colors.name as color FROM items i ' +
      'JOIN colors ON (colors.id=i."colorId");',
      { type: db.QueryTypes.SELECT, raw: true }
    ).then(data => {
      data.forEach((row) => {
        if(row.url) {
          if (organizedData.items[row.category]) {
            organizedData.items[row.category].push(row);
          } else {
            organizedData.items[row.category] = [row];
          }
        }
        if (row.category) {
          organizedData.rawCategories.push(row.category);
        }
        if (row.color) {
          organizedData.rawColors.push(row.color);
        }
        if (row.brand) {
          organizedData.rawBrands.push(row.brand);
        }
      });
    }).then(() => {
      organizedData.colors = dbHelpers.sortAndFilterData(organizedData.rawColors);
      organizedData.brands = dbHelpers.sortAndFilterData(organizedData.rawBrands);
      organizedData.categories = dbHelpers.sortAndFilterData(organizedData.rawCategories);
    }).then(() => {
      cb(organizedData);
    });
  },
  addOutfit: (items, outfitProperties, closetId) => {
    Outfit.create({
      name: outfitProperties.name,
      isFavorite: outfitProperties.isFavorite,
      s3PublicUrl: outfitProperties.s3PublicUrl,
      closetId: closetId
    })
      .then(outfit => {
        for (let item of items) {
          OutfitItem.create({
            itemId: item.id,
            outfitId: outfit.dataValues.id
          })
        }
    });
  }
};

module.exports = dbHelpers;
