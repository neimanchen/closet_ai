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
    Both: ['Pants', 'Tops', 'Shoes', 'Accessories', 'Sleepwear & Lounge', 'Coats & Jackets', 'Shorts', 'Sweaters', 'Suits & Separates'],
    Female: ['Jumpsuits & Rompers', 'Dresses', 'Skirts', 'Lingerie, Hosiery & Socks'],
    Male: ['Underwear, Undershirts & Socks']
  },
  stylesSeasons: {
    Winter: {
      Pants: ['Jogger/Sweatpant', 'Jeans', 'Dress', 'Active', 'Cargo', 'Legging', 'Trouser', 'Chino', 'Denim'],
      'Coats & Jackets': ['Hooded', 'Leather', 'Parka', 'Puffer/Quilted', 'Trench', 'Overcoat', 'Bomber', 'Raincoat', 'Peacoat']
    },
    Spring: {
      Tops: ['T-Shirt/Tank', 'Blouse', 'Bodysuit', 'Crop-Top', 'Active', 'Lace-up', 'Camisole', 'Polo Shirt', 'Button-Down', 'Dress Shirt'],
      Pants: ['Jeans', 'Dress', 'Active', 'Cargo', 'Legging', 'Trouser', 'Chino', 'Denim', 'Capris/Cropped'],
      Shorts: ['Bermuda', 'Cargo', 'Denim', 'Sweat', 'Romper', 'Short', 'Hybrid'],
      'Coats & Jackets': ['Vest', 'Windbreaker', 'Motorcycle', 'Denim']
    },
    Summer: {
      Tops: ['T-Shirt/Tank', 'Blouse', 'Bodysuit', 'Crop-Top', 'Active', 'Lace-up', 'Camisole', 'Polo Shirt', 'Button-Down', 'Dress Shirt'],
      Pants: ['Jeans', 'Dress', 'Active', 'Legging', 'Trouser', 'Chino', 'Denim', 'Capris/Cropped'],
      Shorts: ['Bermuda', 'Cargo', 'Denim', 'Sweat', 'Romper', 'Short', 'Hybrid'],
      'Coats & Jackets': ['Vest', 'Windbreaker', 'Motorcycle', 'Denim']
    },
    Fall: {
      Tops: ['T-Shirt/Tank', 'Blouse', 'Bodysuit', 'Crop-Top', 'Active', 'Lace-up', 'Camisole', 'Polo Shirt', 'Button-Down', 'Dress Shirt'],
      Pants: ['Jeans', 'Dress', 'Active', 'Cargo', 'Legging', 'Trouser', 'Chino', 'Denim', 'Capris/Cropped'],
      Shorts: ['Bermuda', 'Cargo', 'Denim', 'Sweat', 'Romper', 'Short', 'Hybrid'],
      'Coats & Jackets': ['Vest', 'Windbreaker', 'Motorcycle', 'Denim']
    }
  },
  styles: {
    both: {
      Tops: ['Button-Down', 'T-Shirt/Tank', 'Sweatshirts & Hoodies'],
      Pants: ['Jeans', 'Active', 'Cargo', 'Dress', 'Jogger/Sweatpant'],
      'Coats & Jackets': ['Hooded', 'Leather', 'Parka', 'Puffer/Quilted', 'Denim', 'Trench', 'Vest', 'Windbreaker', 'Overcoat', 'Bomber', 'Raincoat', 'Motorcycle', 'Peacoat'],
      Shorts: ['Active', 'Bermuda', 'Cargo', 'Denim', 'Sweat']
    },
    Female: {
      Tops: ['Blouse', 'Bodysuit', 'Crop-Top', 'Lace-up', 'Camisole'],
      Pants: ['Legging', 'Capris/Cropped', 'Trouser'],
      Shorts: ['Romper', 'Short']
    },
    Male: {
      Tops: ['Dress Shirt', 'Polo Shirt'],
      Pants: ['Chino'],
      Shorts: ['Hybrid', 'Chino', 'Swim']
    }
  }
};
