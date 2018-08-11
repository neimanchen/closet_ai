const Sequelize = require('sequelize');
const seed = require('./seedData.js');
const fakeData = require('./fakeData.js');

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
  name: { type: Sequelize.STRING },
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

User.hasOne(Closet); //, { foreignKey: { allowNull: false } }
Closet.belongsTo(User); //, { allowNull: false }
Closet.hasMany(Item); // closetId to Item; getItem, setItem , { foreignKey: { allowNull: false } }
Item.belongsTo(Closet); //, { foreignKey: { allowNull: false } }
Color.hasMany(Item); //, { foreignKey: { allowNull: false } }
Item.belongsTo(Color);
Category.hasMany(Item); //, { foreignKey: { allowNull: false } }
Item.belongsTo(Category); //, { foreignKey: { allowNull: false } }
Category.hasMany(Style);
Style.belongsTo(Category);
Outfit.hasMany(Calendar); //, { foreignKey: { allowNull: false } }
Calendar.belongsTo(Outfit); //, { foreignKey: { allowNull: false } }
Item.belongsToMany(Outfit, { through: 'OutfitItem' });
Outfit.belongsToMany(Item, { through: 'OutfitItem' });
Style.belongsToMany(Season, {through: 'StyleSeason' });
Season.belongsToMany(Style, { through: 'StyleSeason' });

/* promise chain is required to ensure tables are created in the correct sequence so that associations can be set up
 properly. tables should be sync'd in the following order: category, user, closet, item, calendar, outfit, style,
  season, outfits_items, styles_seasons
  */
db.sync()
  .then(() => Category.sync()
    .then(() => User.sync()
      .then(() => Closet.sync()
        .then(()=> Color.sync()
          .then(() => Item.sync()
            .then(() => Outfit.sync()
              .then(() => Calendar.sync()
                .then(() => Style.sync()
                  .then(() => Season.sync())))))))));

const dbHelpers = {
  seedColors: () => {
    for (let i = 0; i < seed.colors.length; i++) {
      let color = Color.build({
        name: seed.colors[i]
      });
      color.save();
    }
  }, seedSeasons: async () => { // TODO: allow for customizing of temp range
    let seasonsKeys = Object.keys(seed.seasons); // ['Winter', 'Spring', 'Summer', 'Fall']
    for (let i = 0; i < seasonsKeys.length; i++) {
      let season = Season.build({
        name: seasonsKeys[i], tempRange: seed.seasons[seasonsKeys[i]] // range associated with each season
      });
      season.save();
    }
  }, seedCategories: async () => {
    // Insert categories then get id's of inserted categories to be used as foreign key in styles
    let categoriesKeys = Object.keys(seed.categories); // ['NA', 'Women', 'Men']
    for (let i = 0; i < categoriesKeys.length; i++) {
      for (let j = 0; j < seed.categories[categoriesKeys[i]].length; j++) {
        let category = Category.build({
          name: seed.categories[categoriesKeys[i]][j], gender: categoriesKeys[i]
        });
        category.save();
      }
    }
  }, /* seed styles table
   */
  seedStyles: async () => {
    let promises = [];
    let genders = Object.keys(seed.styles);
    genders.forEach((gender) => {
      let categories = Object.keys(seed.styles[gender]);
      categories.forEach((category) => {
        let styles = seed.styles[gender][category];
        promises.push(Category.findOne({where: {name: category}})
          .then((category) => {
            styles.forEach((style) => {
              Style.create({
                name: style, gender: gender
              })
                .then((style) => {
                  style.setCategory(category);
                });
            });
          }));
      });
      Promise.all(promises)
        // .then(() => {
        //   let seasons = Object.keys(seed.stylesSeasons);
        //   seasons.forEach((season) => {
        //
        //   })
        //
        // });
    });
  }, createDB: async () => {
    await db.sync()
      .then(() => Category.sync()
        .then(() => User.sync()
          .then(() => Closet.sync()
            .then(() => Color.sync()
              .then(() => Item.sync()
                .then(() => Calendar.sync()
                  .then(() => Outfit.sync()
                    .then(() => Style.sync()
                      .then(() => Season.sync()
                        .then(() => dbHelpers.seedCategories()
                          .then(() => dbHelpers.seedSeasons()
                            .then(() => dbHelpers.seedStyles()
                              .then(() => dbHelpers.seedColors())))))))))))));
    dbHelpers.genFakeData();
  }, // This function Drops all tables. If used, server needs
  // to be restarted to recreate the database tables again, or invoke createDB
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
  }, // generate fake data
  genFakeData: () => {
    User.create(fakeData.user)
      .then(async (user) => {
        let closet = await Closet.create(fakeData.closet);
        closet.setUser(user)
          .then(async (closet) => {
            fakeData.items.forEach(async (item) => {
              let color = await Color.findOne({where: {name: item.color}, attributes: ['id']});
              let category = await Category.findOne({where: {name: item.category}, attributes: ['id']});
              Item.create({
                brandName: item.brandName,
                itemName: item.itemName,
                description: item.description,
                size: item.size,
                sku: item.sku,
                s3PublicUrl: item.s3PublicUrl,
                price: item.price,
                lastWornDate: item.lastWornDate,
                isFavorite: item.isFavorite,
                timesWorn: item.timesWorn,
                maxTimesBeforeWash: item.maxTimesBeforeWash,
                isClean: item.isClean,
                purchaseDate: item.purchaseDate
              })
                .then((item) => {
                  item.setCloset(closet);
                  item.setColor(color);
                  item.setCategory(category);
                });
            });
         })
      });
  }
};

module.exports = dbHelpers;
