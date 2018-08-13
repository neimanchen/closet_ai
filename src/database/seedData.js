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
  },
  items: [
    {
      brandName: 'Topshop',
      itemName: 'Cowl Neck Camisole',
      size: '4',
      sku: 5557142,
      s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/12/_102747532.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90',
      price: '24',
      lastWornDate: '2018-07-19',
      isFavorite: true,
      timesWorn: 10,
      maxTimesBeforeWash: 1,
      isClean: true,
      color: 'black',
      closet: 'My Closet',
      category: 'Tops'
    },
    {
      brandName: 'BP',
      itemName: 'Raw Edge V-Neck Tee',
      size: '4',
      sku: 5370727,
      s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/13/_101151053.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90',
      price: '17',
      lastWornDate: '2018-07-19',
      isFavorite: true,
      timesWorn: 30,
      maxTimesBeforeWash: 1,
      isClean: true,
      color: 'Orange',
      closet: 'My Closet',
      category: 'Tops',
      purchaseDate: '2018-03-01'
    },
    {
      brandName: 'Spanx',
      itemName: 'Camo Faux Leather Leggings',
      size: 'Medium',
      sku: 798736,
      s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/11/_101901771.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90',
      price: '98',
      lastWornDate: '2018-08-08',
      isFavorite: true,
      timesWorn: 2,
      maxTimesBeforeWash: 2,
      isClean: true,
      color: 'Blue',
      closet: 'My Closet',
      category: 'Pants',
      purchaseDate: '2018-08-01'
    },
    {
      brandName: 'Topshop',
      itemName: 'Popper Utility Trousers',
      size: 'Medium',
      sku: 5653449,
      s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/9/_103541349.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90',
      price: '75',
      lastWornDate: '2018-08-04',
      isFavorite: true,
      timesWorn: 3,
      maxTimesBeforeWash: 2,
      isClean: true,
      color: 'Blue',
      closet: 'My Closet',
      category: 'Pants',
      purchaseDate: '2018-05-01'
    },
    {
      brandName: 'Caslon',
      itemName: 'Utility Jacket',
      size: 'Medium',
      sku: 5560277,
      s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/17/_103021737.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90',
      price: '79',
      lastWornDate: '2018-07-04',
      isFavorite: true,
      timesWorn: 2,
      maxTimesBeforeWash: 3,
      isClean: true,
      color: [{
        name: 'Green'
      }],
      closet: 'My Closet',
      category: 'Coats & Jackets',
      purchaseDate: '2018-06-01'
    },
    {
      brandName: 'Caslon',
      itemName: 'Two Pocket Knit Blazer',
      size: 'Medium',
      sku: 5560281,
      s3PublicUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/17/_103021737.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90',
      price: '59',
      lastWornDate: '2018-08-02',
      isFavorite: true,
      timesWorn: 1,
      maxTimesBeforeWash: 3,
      isClean: true,
      color: 'Gray',
      closet: 'My Closet',
      category: 'Coats & Jackets',
      purchaseDate: '2018-02-01'
    }
  ]
};
