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
  stylesSeasons: [
    { style: 'Long Sleeve Button-Down', season: ['Winter', 'Spring', 'Fall'] },
    { style: 'Short Sleeve Button-Down', season: ['Winter', 'Spring', 'Summer', 'Fall']},
    { style: 'T-Shirt/Tank', season: ['Spring', 'Summer'] },
    { style: 'Sweatshirts & Hoodies', season: ['Fall', 'Winter', 'Spring'] },
    { style: 'Jeans', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Active', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Cargo', season: ['Winter', 'Spring', 'Fall'] },
    { style: 'Dress', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Jogger/Sweatpant', season: ['Winter', 'Spring', 'Fall'] },
    { style: 'Hooded', season: ['Winter', 'Fall'] },
    { style: 'Leather', season: ['Winter', 'Fall'] },
    { style: 'Parka', season: ['Winter', 'Fall'] },
    { style: 'Puffer/Quilted', season: ['Winter', 'Fall'] },
    { style: 'Denim', season: ['Winter', 'Spring', 'Fall'] },
    { style: 'Trench', season: ['Winter', 'Fall'] },
    { style: 'Vest', season: ['Spring', 'Summer', 'Fall'] },
    { style: 'Windbreaker', season: ['Winter', 'Spring', 'Fall'] },
    { style: 'Overcoat', season: ['Winter', 'Fall'] },
    { style: 'Bomber', season: ['Winter', 'Fall'] },
    { style: 'Raincoat', season: ['Winter', 'Fall'] },
    { style: 'Motorcycle', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Peacoat', season: ['Winter', 'Fall'] },
    { style: 'Active', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Bermuda', season: ['Spring', 'Summer'] },
    { style: 'Cargo', season: ['Spring', 'Summer'] },
    { style: 'Denim', season: ['Spring', 'Summer'] },
    { style: 'Sweat', season: ['Spring', 'Fall'] },
    { style: 'Blouse', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Bodysuit', season: ['Spring', 'Summer'] },
    { style: 'Crop-Top', season: ['Spring', 'Summer'] },
    { style: 'Lace-up', season: ['Spring', 'Summer'] },
    { style: 'Camisole', season: ['Spring', 'Summer'] },
    { style: 'Legging', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Capris/Cropped', season: ['Spring', 'Summer', 'Fall'] },
    { style: 'Trouser', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Romper', season: ['Spring', 'Summer'] },
    { style: 'Short', season: ['Spring', 'Summer'] },
    { style: 'Dress Shirt', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Polo Shirt', season: ['Spring', 'Summer', 'Fall'] },
    { style: 'Chino', season: ['Winter', 'Spring', 'Summer', 'Fall'] },
    { style: 'Hybrid', season: ['Spring', 'Summer', 'Fall'] },
    { style: 'Chino', season: ['Spring', 'Summer'] },
    { style: 'Swim', season: ['Winter', 'Spring', 'Summer', 'Fall'] }
  ],
  styles: {
    Both: {
      Tops: ['Long Sleeve Button-Down', 'Short Sleeve Button-Down','T-Shirt/Tank', 'Sweatshirts & Hoodies'],
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
