const Sequelize = require('sequelize');
const seed = require('./seedData.js');

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

// Models for schema creation. ** factor out to models file later.
const User = db.define('users', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING, unique: true },
  hash: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING },
  zip: { type: Sequelize.STRING },
  workZip: { type: Sequelize.STRING },
  birthDate: { type: Sequelize.DATE },
});
const Item = db.define('items', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  itemName: { type: Sequelize.STRING },
  brandName: { type: Sequelize.STRING },
  color: { type: Sequelize.STRING },
  size: { type: Sequelize.STRING },
  sku: { type: Sequelize.STRING },
  s3PublicUrl: { type: Sequelize.STRING },
  price: { type: Sequelize.INTEGER },
  lastWornDate: { type: Sequelize.DATE },
  isFavorite: { type: Sequelize.BOOLEAN },
  timesWorn: { type: Sequelize.INTEGER },
  maxTimesBeforeWash: { type: Sequelize.INTEGER },
  isClean: { type: Sequelize.BOOLEAN }
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
const OutfitItem = db.define('outfitsItems', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});
const StyleSeason = db.define('stylesSeasons', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});
const Calendar = db.define('calendar', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  date: { type: Sequelize.DATE }
});

User.hasMany(Closet, { foreignKey: { allowNull: false } });
Closet.belongsTo(User, { allowNull: false });
Closet.hasMany(Item, { foreignKey: { allowNull: false } });
Item.belongsTo(Closet, { foreignKey: { allowNull: false } });
Color.hasMany(Item, { foreignKey: { allowNull: false } });
Category.hasMany(Item, { foreignKey: { allowNull: false } });
Item.belongsTo(Category, { foreignKey: { allowNull: false } });
Category.hasMany(Style, { foreignKey: { allowNull: false } });
Style.belongsTo(Category, { foreignKey: { allowNull: false } });
Outfit.hasMany(Calendar, { foreignKey: { allowNull: false } });
Calendar.belongsTo(Outfit, { foreignKey: { allowNull: false } });

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

Item.belongsToMany(Outfit, { through: OutfitItem });
Outfit.belongsToMany(Item, { through: OutfitItem });
Style.belongsToMany(Season, {through: StyleSeason });
Season.belongsToMany(Style, { through: StyleSeason });

const dbHelpers = {
  seedColors: () => {
    for (let i = 0; i < seed.colors.length; i++) {
      let color = Color.build({
        name: seed.colors[i]
      });
      color.save();
    }
  },
  seedSeasons: async () => { // TODO: allow for customizing of temp range
    let seasonsKeys = Object.keys(seed.seasons); // ['Winter', 'Spring', 'Summer', 'Fall']
    for (let i = 0; i < seasonsKeys.length; i++) {
      let season = Season.build({
        name: seasonsKeys[i], tempRange: seed.seasons[seasonsKeys[i]] // range associated with each season
      });
      season.save();
    }
  },
  seedCategories: async () => {
    // Insert categories then get id's of inserted categories to be used as foreign key in styles
    let categoriesKeys = Object.keys(seed.categories); // ['NA', 'Women', 'Men']
    for (let i = 0; i < categoriesKeys.length; i++) {
      for (let j = 0; j < seed.categories[categoriesKeys[i]].length; j++) {
        let category = Category.build({
          name: seed.categories[categoriesKeys[i]][j],
          gender: categoriesKeys[i]
        });
        category.save();
      }
    }
  },
  /* seed styles table
   */
  seedStyles: async () => {
    let promises = [];
    let genders = Object.keys(seed.styles);
    genders.forEach((gender) => {
      let categories = Object.keys(seed.styles[gender]);
      categories.forEach((category) => {
        let styles = seed.styles[gender][category];
        promises.push(Category.findOne({ where: { name: category }, attributes: ['id'], raw: true })
          .then((categoryResult) => {
            styles.forEach((style) => {
              promises.push(Style.create({
                name: style,
                gender: 'All',
                categoryId: categoryResult.id
              }));
            });
          }));
      });
    });
    Promise.all(promises);
  },
  createDB: async () => {
    db.sync()
      .then(() => Category.sync()
        .then(() => User.sync()
          .then(() => Closet.sync()
            .then(()=> Color.sync()
              .then(() => Item.sync()
                .then(() => Calendar.sync()
                  .then(() => Outfit.sync()
                    .then(() => Style.sync()
                      .then(() => Season.sync()
                        .then(() => OutfitItem.sync()
                          .then(() => StyleSeason.sync()
                            .then(() => dbHelpers.seedCategories()
                              .then(() => dbHelpers.seedSeasons()
                                .then(() => dbHelpers.seedStyles()
                                  .then(() => dbHelpers.seedColors())))))))))))))));
  },
  // This function Drops all tables. If used, server needs
  // to be restarted to recreate the database tables again, or invoke createDB
  dropTables: () => {
    return db.drop();
  },
  clearTables: () => {
    OutfitItem.findAll().then(outfitItems => outfitItems.forEach(outfitItem => outfitItem.destroy()));
    Season.findAll().then(seasons => seasons.forEach(season => season.destroy()));
    Style.findAll().then(styles => styles.forEach(style => style.destroy()));
    User.findAll().then(users => users.forEach(user => user.destroy()));
    Closet.findAll().then(closets => closets.forEach(closet => closet.destroy()));
    Outfit.findAll().then(outfits => outfits.forEach(outfit => outfit.destroy()));
    Calendar.findAll().then(calendars => calendars.forEach(calendar => calendar.destroy()));
    Item.findAll().then(items => items.forEach(item => item.destroy()));
    Category.findAll().then(categories => categories.forEach(category => category.destroy()));
    StyleSeason.findAll().then(styleSeasons => styleSeasons.forEach(styleSeason => styleSeason.destroy()));
  }
  // generate fake data
  // genFakeData: () => {
  //   let testUser = User.build({
  //     email: 'hubert@testemail.com',
  //     password: '$2a$10$flgD5OmkK2cwd/7CddCOW.Ujd30tqTb4r02bYVfYuI/GlwKw5gNt.'
  //   });
  //
  //   let closet = Closet.build({
  //     name: 'my closet',
  //     isPrivate: 'true'
  //   });

    // generate items
    // for (let i = 0; i < count; i++) {
    //   let item = Item.build({
    //     item_name: faker.random.word,
    //     brand_name: faker.random.word,
    //     color: {type: Sequelize.STRING},
    //     size: {type: Sequelize.STRING},
    //     sku: {type: Sequelize.STRING},
    //     s3_public_url: {type: Sequelize.STRING},
    //     price: {type: Sequelize.INTEGER},
    //     last_worn_date: {type: Sequelize.DATE},
    //     is_favorite: {type: Sequelize.BOOLEAN},
    //     times_worn: {type: Sequelize.INTEGER},
    //     max_times_before_wash: {type: Sequelize.INTEGER},
    //     is_clean: {type: Sequelize.BOOLEAN}
    //   });
    // }
  // },
};

module.exports = dbHelpers;
