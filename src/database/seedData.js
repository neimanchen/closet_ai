module.exports = {
  colors: ['White', 'Black', 'Gray', 'Yellow', 'Red', 'Blue', 'Green', 'Brown', 'Pink', 'Orange', 'Purple',
    'Beige', 'Off-white', 'Metallic'],
  seasons: {
    Winter: [{value: -100, inclusive: false}, {value: 60}],
    Spring: [{value: 61, inclusive: false}, {value: 75}],
    Summer: [{value: 76, inclusive: false}, {value: 140}],
    Fall: [{value: 61, inclusive: false}, {value: 75}]
  },
  categories: {
    All: ['Pants', 'Tops', 'Shoes', 'Accessories', 'Sleepwear & Lounge', 'Coats & Jackets', 'Shorts', 'Sweaters', 'Suits & Separates'],
    Women: ['Jumpsuits & Rompers', 'Dresses', 'Skirts', 'Lingerie, Hosiery & Socks'],
    Men: ['Underwear, Undershirts & Socks']
  },
  stylesSeasons: {
    Winter: {
      Pants: ['Jogger/Sweatpant', 'Jeans', 'Dress', 'Active', 'Cargo', 'Legging', 'Trouser', 'Chino', 'Denim'],
      'Coats & Jackets': ['Hooded', 'Leather', 'Parka', 'Puffer/Quilted', 'Trench', 'Overcoat', 'Bomber', 'Raincoat', 'Peacoat']
    },
    Spring: {
      Tops: ['T-Shirt/Tank', 'Blouse', 'Bodysuit', 'Crop-Top', 'Active', 'Lace-up', 'Camisole', 'Polo Shirt', 'Button-Down', 'Capris/Cropped', 'Dress Shirt'],
      Pants: ['Jeans', 'Dress', 'Active', 'Cargo', 'Legging', 'Trouser', 'Chino', 'Denim'],
      Shorts: ['Bermuda', 'Cargo', 'Denim', 'Sweat', 'Romper', 'Short', 'Hybrid'],
      'Coats & Jackets': ['Vest', 'Windbreaker', 'Motorcycle', 'Denim']
    },
    Summer: {
      Tops: ['T-Shirt/Tank', 'Blouse', 'Bodysuit', 'Crop-Top', 'Active', 'Lace-up', 'Camisole', 'Polo Shirt', 'Button-Down', 'Capris/Cropped', 'Dress Shirt'],
      Pants: ['Jeans', 'Dress', 'Active', 'Cargo', 'Legging', 'Trouser', 'Chino', 'Denim'],
      Shorts: ['Bermuda', 'Cargo', 'Denim', 'Sweat', 'Romper', 'Short', 'Hybrid'],
      'Coats & Jackets': ['Vest', 'Windbreaker', 'Motorcycle', 'Denim']
    },
    Fall: {
      Tops: ['T-Shirt/Tank', 'Blouse', 'Bodysuit', 'Crop-Top', 'Active', 'Lace-up', 'Camisole', 'Polo Shirt', 'Button-Down', 'Capris/Cropped', 'Dress Shirt'],
      Pants: ['Jeans', 'Dress', 'Active', 'Cargo', 'Legging', 'Trouser', 'Chino', 'Denim'],
      Shorts: ['Bermuda', 'Cargo', 'Denim', 'Sweat', 'Romper', 'Short', 'Hybrid'],
      'Coats & Jackets': ['Vest', 'Windbreaker', 'Motorcycle', 'Denim']
    }
  },
  styles: {
    All: {
      Tops: ['Button-Down', 'T-Shirt/Tank', 'Sweatshirts & Hoodies'],
      Pants: ['Jeans', 'Active', 'Cargo', 'Dress', 'Jogger/Sweatpant'],
      'Coats & Jackets': ['Hooded', 'Leather', 'Parka', 'Puffer/Quilted', 'Denim', 'Trench', 'Vest',
  'Windbreaker', 'Overcoat', 'Bomber', 'Raincoat', 'Motorcycle', 'Peacoat'],
      Shorts: ['Active', 'Bermuda', 'Cargo', 'Denim', 'Sweat']
    },
    Women: {
      Tops: ['Blouse', 'Bodysuit', 'Crop-Top', 'Lace-up', 'Camisole'],
      Pants: ['Legging', 'Capris/Cropped', 'Trouser'],
      Shorts: ['Romper', 'Short']
    },
    Men: {
      Tops: ['Dress Shirt', 'Polo Shirt'],
      Pants: ['Chino'],
      Shorts: ['Hybrid', 'Chino', 'Swim']
    }
  },
  // styles: [
  //   {
  //     name: 'Button-Down',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Button-Down',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Button-Down',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Summer'
  //   },
  //   {
  //     name: 'Button-Down',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'T-Shirt/Tank',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'T-Shirt/Tank',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'T-Shirt/Tank',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Summer'
  //   },
  //   {
  //     name: 'T-Shirt/Tank',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Sweatshirts & Hoodies',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Sweatshirts & Hoodies',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Sweatshirts & Hoodies',
  //     gender: 'All',
  //     category: 'Tops',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Jeans',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Jeans',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Jeans',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Summer'
  //   },
  //   {
  //     name: 'Jeans',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Active',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Active',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Active',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Summer'
  //   },
  //   {
  //     name: 'Active',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Cargo',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Cargo',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Active',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Summer'
  //   },
  //   {
  //     name: 'Active',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Cargo'
  //   },
  //   {
  //     name: 'Dress',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Dress',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Dress',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Summer'
  //   },
  //   {
  //     name: 'Dress',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Jogger/Sweatpant',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Jogger/Sweatpant',
  //     gender: 'All',
  //     category: 'Pants',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Hooded',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Hooded',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Hooded',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Leather',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Leather',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Leather',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Parka',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Parka',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Parka',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Puffer/Quilted',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'winter'
  //   },
  //   {
  //     name: 'Denim',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Denim',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Spring'
  //   },
  //   {
  //     name: 'Denim',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Fall'
  //   },
  //   {
  //     name: 'Denim',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Winter'
  //   },
  //   {
  //     name: 'Puffer/Quilted',
  //     gender: 'All',
  //     category: 'Coats & Jackets',
  //     season: 'Fall'
  //   },
  // ]
};
