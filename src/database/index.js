const Sequelize = require('sequelize');

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
  salt: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING },
  zip: { type: Sequelize.STRING },
  work_zip: { type: Sequelize.STRING },
  birth_date: { type: Sequelize.DATE },
});

const Item = db.define('items', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  item_name: { type: Sequelize.STRING },
  brand_name: { type: Sequelize.STRING },
  color: { type: Sequelize.STRING },
  size: { type: Sequelize.STRING },
  sku: { type: Sequelize.STRING },
  s3_public_url: { type: Sequelize.STRING },
  price: { type: Sequelize.INTEGER },
  last_worn_date: { type: Sequelize.DATE },
  is_favorite: { type: Sequelize.BOOLEAN },
  times_worn: { type: Sequelize.INTEGER },
  max_times_before_wash: { type: Sequelize.INTEGER },
  is_clean: { type: Sequelize.BOOLEAN }
});

const Closet = db.define('closets', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  is_private: { type: Sequelize.BOOLEAN }
});

const Outfit = db.define('outfits', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING }
});

const Category = db.define('categories', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING }
});

const Style = db.define('styles', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING }
});

const Season = db.define('seasons', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING }
});

// join table
const OutfitItem = db.define('outfits_items', {
  kind: { type: Sequelize.STRING }
});

const StyleSeason = db.define('styles_seasons');

const Calendar = db.define('calendar', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  date: { type: Sequelize.DATE }
});

User.hasMany(Closet, {
  foreignKey: {
    allowNull: false
  }
});

Closet.belongsTo(User, {
  allowNull: false
});

Closet.hasMany(Item, {
  foreignKey: {
    allowNull: false
  }
});

Item.belongsTo(Closet);

Category.hasMany(Item, {
  foreignKey: {
    allowNull: false
  }
});

Item.belongsTo(Category, {
  allowNull: false
});

Category.hasMany(Style, {
  foreignKey: {
    allowNull: false
  }
});

Style.belongsTo(Category);

Style.belongsToMany(Season, {
  through: StyleSeason,
  foreignKey: {
    allowNull: false
  }
});

Season.belongsToMany(Style, {
  through: StyleSeason,
  foreignKey: {
    allowNull: false
  }
});

Season.belongsTo(Style);

Calendar.hasMany(Outfit);

Outfit.belongsTo(Calendar);


// following two associations establish the n:m relationship between Outfit and Item
// for the existing join-table model OutfitItem.
Item.belongsToMany(Outfit, {
  through: OutfitItem
});

Outfit.belongsToMany(Item, {
  through: OutfitItem
});

// promise chain is required to ensure tables are created in the correct
// sequence so that associations can be set up properly.
// tables should be sync'd in the following order: category, item, calendar, outfit, closet, user, style, season,  outfits_items
Category.sync().then(() => Item.sync().then(() => Calendar.sync().then(() => Outfit.sync().then(() => Closet.sync().then(() => User.sync().then(() => Style.sync().then(() => Season.sync().then(() => OutfitItem.sync().then(() => StyleSeason.sync())))))))));

const dbHelpers = {
  clearTables: () => {
    OutfitItem.findAll().then(outfitItems => outfitItems.forEach(outfitItem => outfitItem.destroy()));
    Season.findAll().then(seasons => seasons.forEach(season => season.destroy()));
    Style.findAll().then(items => styles.forEach(style => style.destroy()));
    User.findAll().then(users => users.forEach(user => user.destroy()));
    Closet.findAll().then(closets => closets.forEach(closet => closet.destroy()));
    Outfit.findAll().then(outfits => outfits.forEach(outfit => outfit.destroy()));
    Calendar.findAll().then(calendars => calendars.forEach(calendar => calendar.destroy()));
    Item.findAll().then(items => items.forEach(item => item.destroy()));
    Category.findAll().then(categories => categories.forEach(category => category.destroy()));
    StyleSeason.findAll().then(styleSeasons => styleSeasons.forEach(styleSeason => styleSeason.destroy()));
  },

  // This function Drops all tables. If used, server needs
  // to be restarted to recreate the database tables again
  dropTables: () => {
    return db.drop();
  },

  createDB: () => {
    Category.sync().then(() => Item.sync().then(() => Calendar.sync().then(() => Outfit.sync().then(() => Closet.sync().then(() => User.sync().then(() => Style.sync().then(() => Season.sync().then(() => OutfitItem.sync().then(() => StyleSeason.sync())))))))));
  }
}

module.exports = dbHelpers;