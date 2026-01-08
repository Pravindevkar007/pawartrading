export const categories = [
  {
    id: 1,
    name: "Rice & Grains",
    image: "🌾",
    color: "#FFF3E0",
    subcategories: [
      { id: 1, name: "Kolam Rice (1kg)", price: 85, image: "🌾", originalPrice: 95 },
      { id: 2, name: "Indrayani Rice (1kg)", price: 90, image: "🌾", originalPrice: 100 },
      { id: 3, name: "Basmati Rice (1kg)", price: 120, image: "🌾", originalPrice: 140 },
      { id: 4, name: "Wheat Flour (1kg)", price: 45, image: "🌾", originalPrice: 50 },
      { id: 5, name: "Rava/Semolina (500g)", price: 35, image: "🌾", originalPrice: 40 },
      { id: 6, name: "Poha (500g)", price: 40, image: "🌾", originalPrice: 45 }
    ]
  },
  {
    id: 2,
    name: "Cooking Oils",
    image: "🫒",
    color: "#FFF8E1",
    subcategories: [
      { id: 7, name: "Sunflower Oil (1L)", price: 120, image: "🫒", originalPrice: 130 },
      { id: 8, name: "Groundnut Oil (1L)", price: 140, image: "🫒", originalPrice: 150 },
      { id: 9, name: "Coconut Oil (500ml)", price: 180, image: "🥥", originalPrice: 200 },
      { id: 10, name: "Mustard Oil (500ml)", price: 90, image: "🫒", originalPrice: 100 },
      { id: 11, name: "Olive Oil (250ml)", price: 250, image: "🫒", originalPrice: 280 }
    ]
  },
  {
    id: 3,
    name: "Milk & Dairy",
    image: "🥛",
    color: "#E3F2FD",
    subcategories: [
      { id: 12, name: "Fresh Milk (1L)", price: 60, image: "🥛", originalPrice: 65 },
      { id: 13, name: "Toned Milk (1L)", price: 55, image: "🥛", originalPrice: 60 },
      { id: 14, name: "Full Cream Milk (1L)", price: 65, image: "🥛", originalPrice: 70 },
      { id: 15, name: "Paneer (250g)", price: 120, image: "🧀", originalPrice: 130 },
      { id: 16, name: "Cottage Cheese (200g)", price: 100, image: "🧀", originalPrice: 110 },
      { id: 17, name: "Yogurt (500g)", price: 45, image: "🥛", originalPrice: 50 },
      { id: 18, name: "Greek Yogurt (400g)", price: 80, image: "🥛", originalPrice: 90 },
      { id: 19, name: "Butter (500g)", price: 180, image: "🧈", originalPrice: 200 },
      { id: 20, name: "Ghee (500ml)", price: 350, image: "🧈", originalPrice: 380 },
      { id: 21, name: "Cheese Slices (200g)", price: 150, image: "🧀", originalPrice: 170 },
      { id: 22, name: "Mozzarella Cheese (200g)", price: 180, image: "🧀", originalPrice: 200 },
      { id: 23, name: "Cream (200ml)", price: 60, image: "🥛", originalPrice: 70 },
      { id: 24, name: "Buttermilk (500ml)", price: 25, image: "🥛", originalPrice: 30 },
      { id: 25, name: "Lassi (250ml)", price: 35, image: "🥛", originalPrice: 40 },
      { id: 26, name: "Ice Cream (500ml)", price: 120, image: "🍦", originalPrice: 140 }
    ]
  },
  {
    id: 4,
    name: "Vegetables",
    image: "🥕",
    color: "#E8F5E8",
    subcategories: [
      { id: 27, name: "Onions (1kg)", price: 30, image: "🧅", originalPrice: 35 },
      { id: 28, name: "Potatoes (1kg)", price: 25, image: "🥔", originalPrice: 30 },
      { id: 29, name: "Tomatoes (1kg)", price: 40, image: "🍅", originalPrice: 45 },
      { id: 30, name: "Carrots (500g)", price: 35, image: "🥕", originalPrice: 40 },
      { id: 31, name: "Green Beans (500g)", price: 50, image: "🫛", originalPrice: 55 },
      { id: 32, name: "Cauliflower (1pc)", price: 40, image: "🥬", originalPrice: 45 },
      { id: 33, name: "Cabbage (1kg)", price: 30, image: "🥬", originalPrice: 35 },
      { id: 34, name: "Green Chili (250g)", price: 20, image: "🌶️", originalPrice: 25 },
      { id: 35, name: "Ginger (250g)", price: 40, image: "🫚", originalPrice: 45 },
      { id: 36, name: "Garlic (250g)", price: 35, image: "🧄", originalPrice: 40 }
    ]
  },
  {
    id: 5,
    name: "Daal & Pulses",
    image: "🫘",
    color: "#FFF8E1",
    subcategories: [
      { id: 37, name: "Toor Daal (1kg)", price: 95, image: "🫘", originalPrice: 105 },
      { id: 38, name: "Moong Daal (1kg)", price: 110, image: "🫘", originalPrice: 120 },
      { id: 39, name: "Masoor Daal (1kg)", price: 85, image: "🫘", originalPrice: 95 },
      { id: 40, name: "Chana Daal (1kg)", price: 90, image: "🫘", originalPrice: 100 },
      { id: 41, name: "Urad Daal (1kg)", price: 120, image: "🫘", originalPrice: 130 },
      { id: 42, name: "Rajma (1kg)", price: 140, image: "🫘", originalPrice: 150 },
      { id: 43, name: "Chickpeas (1kg)", price: 85, image: "🫛", originalPrice: 95 }
    ]
  },
  {
    id: 6,
    name: "Spices & Masalas",
    image: "🌶️",
    color: "#FFEBEE",
    subcategories: [
      { id: 44, name: "Turmeric Powder (100g)", price: 45, image: "🟡", originalPrice: 50 },
      { id: 45, name: "Red Chili Powder (100g)", price: 50, image: "🌶️", originalPrice: 55 },
      { id: 46, name: "Coriander Seeds (100g)", price: 30, image: "🌿", originalPrice: 35 },
      { id: 47, name: "Garam Masala (50g)", price: 60, image: "🌶️", originalPrice: 70 },
      { id: 48, name: "Chicken Masala (100g)", price: 80, image: "🌶️", originalPrice: 90 },
      { id: 49, name: "Mutton Masala (100g)", price: 85, image: "🌶️", originalPrice: 95 },
      { id: 50, name: "Paneer Masala (100g)", price: 70, image: "🌶️", originalPrice: 80 },
      { id: 51, name: "Maggi Masala (10g)", price: 5, image: "🌶️", originalPrice: 8 },
      { id: 52, name: "Khada Masala (50g)", price: 65, image: "🌿", originalPrice: 75 },
      { id: 53, name: "Cumin Seeds (100g)", price: 40, image: "🌿", originalPrice: 45 },
      { id: 54, name: "Black Pepper (50g)", price: 120, image: "⚫", originalPrice: 130 },
      { id: 55, name: "Cardamom (50g)", price: 200, image: "🌿", originalPrice: 220 },
      { id: 56, name: "Cinnamon (50g)", price: 80, image: "🌿", originalPrice: 90 },
      { id: 57, name: "Cloves (25g)", price: 60, image: "🌿", originalPrice: 70 },
      { id: 58, name: "Bay Leaves (10g)", price: 25, image: "🍃", originalPrice: 30 }
    ]
  },
  {
    id: 7,
    name: "Personal Care",
    image: "🧼",
    color: "#F3E5F5",
    subcategories: [
      { id: 59, name: "Lux Soap (100g)", price: 35, image: "🧼", originalPrice: 40 },
      { id: 60, name: "Dove Soap (100g)", price: 45, image: "🧼", originalPrice: 50 },
      { id: 61, name: "Lifebuoy Soap (100g)", price: 25, image: "🧼", originalPrice: 30 },
      { id: 62, name: "Medimix Soap (100g)", price: 30, image: "🧼", originalPrice: 35 },
      { id: 63, name: "Head & Shoulders (200ml)", price: 180, image: "🧴", originalPrice: 200 },
      { id: 64, name: "Clinic Plus (175ml)", price: 120, image: "🧴", originalPrice: 140 },
      { id: 65, name: "Pantene Shampoo (200ml)", price: 160, image: "🧴", originalPrice: 180 },
      { id: 66, name: "Hair Oil Coconut (200ml)", price: 80, image: "🥥", originalPrice: 90 },
      { id: 67, name: "Hair Oil Mustard (200ml)", price: 70, image: "🫒", originalPrice: 80 },
      { id: 68, name: "Toothpaste Colgate (100g)", price: 45, image: "🦷", originalPrice: 50 },
      { id: 69, name: "Toothbrush (1pc)", price: 25, image: "🪥", originalPrice: 30 }
    ]
  },
  {
    id: 8,
    name: "Tea & Beverages",
    image: "🍵",
    color: "#E0F2F1",
    subcategories: [
      { id: 70, name: "Tata Tea Gold (250g)", price: 150, image: "🍵", originalPrice: 170 },
      { id: 71, name: "Red Label Tea (250g)", price: 140, image: "🍵", originalPrice: 160 },
      { id: 72, name: "Brooke Bond (250g)", price: 135, image: "🍵", originalPrice: 155 },
      { id: 73, name: "Society Tea (250g)", price: 130, image: "🍵", originalPrice: 150 },
      { id: 74, name: "Girnar Tea (250g)", price: 125, image: "🍵", originalPrice: 145 },
      { id: 75, name: "Nescafe Coffee (200g)", price: 200, image: "☕", originalPrice: 220 },
      { id: 76, name: "Bru Coffee (200g)", price: 180, image: "☕", originalPrice: 200 },
      { id: 77, name: "Green Tea (100g)", price: 120, image: "🍵", originalPrice: 140 },
      { id: 78, name: "Soft Drink (500ml)", price: 40, image: "🥤", originalPrice: 45 }
    ]
  },
  {
    id: 9,
    name: "Household Items",
    image: "🪣",
    color: "#F0F4C3",
    subcategories: [
      { id: 79, name: "Plastic Bucket (20L)", price: 250, image: "🪣", originalPrice: 280 },
      { id: 80, name: "Steel Bucket (15L)", price: 400, image: "🪣", originalPrice: 450 },
      { id: 81, name: "Detergent Powder (1kg)", price: 120, image: "🧽", originalPrice: 140 },
      { id: 82, name: "Dish Soap (500ml)", price: 80, image: "🧽", originalPrice: 90 },
      { id: 83, name: "Floor Cleaner (1L)", price: 100, image: "🧽", originalPrice: 120 },
      { id: 84, name: "Toilet Paper (4 rolls)", price: 120, image: "🧻", originalPrice: 140 },
      { id: 85, name: "Garbage Bags (30pcs)", price: 60, image: "🗑️", originalPrice: 70 }
    ]
  },
  {
    id: 10,
    name: "Snacks & Biscuits",
    image: "🍪",
    color: "#FFF3E0",
    subcategories: [
      { id: 86, name: "Parle-G Biscuits (200g)", price: 40, image: "🍪", originalPrice: 45 },
      { id: 87, name: "Marie Gold (200g)", price: 45, image: "🍪", originalPrice: 50 },
      { id: 88, name: "Good Day (200g)", price: 50, image: "🍪", originalPrice: 55 },
      { id: 89, name: "Lays Chips (100g)", price: 25, image: "🥔", originalPrice: 30 },
      { id: 90, name: "Kurkure (100g)", price: 20, image: "🌽", originalPrice: 25 },
      { id: 91, name: "Namkeen Mix (150g)", price: 35, image: "🥜", originalPrice: 40 },
      { id: 92, name: "Maggi Noodles (70g)", price: 15, image: "🍜", originalPrice: 18 }
    ]
  },
  {
    id: 11,
    name: "Animal Feed",
    image: "🐄",
    color: "#E8F5E8",
    subcategories: [
      { id: 93, name: "Cattle Feed (25kg)", price: 800, image: "🐄", originalPrice: 850 },
      { id: 94, name: "Buffalo Feed (25kg)", price: 750, image: "🐃", originalPrice: 800 },
      { id: 95, name: "Wheat Straw (10kg)", price: 200, image: "🌾", originalPrice: 220 },
      { id: 96, name: "Rice Straw (10kg)", price: 180, image: "🌾", originalPrice: 200 },
      { id: 97, name: "Green Fodder (5kg)", price: 150, image: "🌿", originalPrice: 170 },
      { id: 98, name: "Mineral Mix (1kg)", price: 120, image: "⚪", originalPrice: 140 },
      { id: 99, name: "Salt Lick (500g)", price: 80, image: "🧂", originalPrice: 90 },
      { id: 100, name: "Jaggery for Animals (1kg)", price: 60, image: "🟤", originalPrice: 70 }
    ]
  }
];

export const todaysOffers = [
  { id: 1, name: "Kolam Rice (1kg)", price: 75, originalPrice: 95, discount: 21, image: "🌾", category: "Rice & Grains" },
  { id: 12, name: "Fresh Milk (1L)", price: 55, originalPrice: 65, discount: 15, image: "🥛", category: "Milk & Dairy" },
  { id: 27, name: "Onions (1kg)", price: 25, originalPrice: 35, discount: 29, image: "🧅", category: "Vegetables" },
  { id: 59, name: "Lux Soap (100g)", price: 30, originalPrice: 40, discount: 25, image: "🧼", category: "Personal Care" },
  { id: 70, name: "Tata Tea Gold (250g)", price: 130, originalPrice: 170, discount: 24, image: "🍵", category: "Tea & Beverages" },
  { id: 86, name: "Parle-G Biscuits (200g)", price: 35, originalPrice: 45, discount: 22, image: "🍪", category: "Snacks & Biscuits" }
];

export const carouselAds = [
  {
    id: 1,
    title: "Fresh Vegetables",
    subtitle: "Up to 30% OFF",
    image: "🥕",
    backgroundColor: "#4CAF50",
    textColor: "#FFFFFF"
  },
  {
    id: 2,
    title: "Dairy Products",
    subtitle: "Buy 2 Get 1 Free",
    image: "🥛",
    backgroundColor: "#2196F3",
    textColor: "#FFFFFF"
  },
  {
    id: 3,
    title: "Premium Rice",
    subtitle: "Special Discount",
    image: "🌾",
    backgroundColor: "#FF9800",
    textColor: "#FFFFFF"
  }
];

export const products = [
  // Rice & Grains
  { id: 1, name: "Kolam Rice (1kg)", price: 85, image: "🌾", category: "Rice & Grains", originalPrice: 95 },
  { id: 2, name: "Indrayani Rice (1kg)", price: 90, image: "🌾", category: "Rice & Grains", originalPrice: 100 },
  { id: 3, name: "Basmati Rice (1kg)", price: 120, image: "🌾", category: "Rice & Grains", originalPrice: 140 },
  { id: 4, name: "Wheat Flour (1kg)", price: 45, image: "🌾", category: "Rice & Grains", originalPrice: 50 },
  { id: 5, name: "Rava/Semolina (500g)", price: 35, image: "🌾", category: "Rice & Grains", originalPrice: 40 },
  { id: 6, name: "Poha (500g)", price: 40, image: "🌾", category: "Rice & Grains", originalPrice: 45 },
  
  // Cooking Oils
  { id: 7, name: "Sunflower Oil (1L)", price: 120, image: "🫒", category: "Cooking Oils", originalPrice: 130 },
  { id: 8, name: "Groundnut Oil (1L)", price: 140, image: "🫒", category: "Cooking Oils", originalPrice: 150 },
  { id: 9, name: "Coconut Oil (500ml)", price: 180, image: "🥥", category: "Cooking Oils", originalPrice: 200 },
  { id: 10, name: "Mustard Oil (500ml)", price: 90, image: "🫒", category: "Cooking Oils", originalPrice: 100 },
  { id: 11, name: "Olive Oil (250ml)", price: 250, image: "🫒", category: "Cooking Oils", originalPrice: 280 },
  
  // Milk & Dairy
  { id: 12, name: "Fresh Milk (1L)", price: 60, image: "🥛", category: "Milk & Dairy", originalPrice: 65 },
  { id: 13, name: "Toned Milk (1L)", price: 55, image: "🥛", category: "Milk & Dairy", originalPrice: 60 },
  { id: 14, name: "Full Cream Milk (1L)", price: 65, image: "🥛", category: "Milk & Dairy", originalPrice: 70 },
  { id: 15, name: "Paneer (250g)", price: 120, image: "🧀", category: "Milk & Dairy", originalPrice: 130 },
  { id: 16, name: "Cottage Cheese (200g)", price: 100, image: "🧀", category: "Milk & Dairy", originalPrice: 110 },
  { id: 17, name: "Yogurt (500g)", price: 45, image: "🥛", category: "Milk & Dairy", originalPrice: 50 },
  { id: 18, name: "Greek Yogurt (400g)", price: 80, image: "🥛", category: "Milk & Dairy", originalPrice: 90 },
  { id: 19, name: "Butter (500g)", price: 180, image: "🧈", category: "Milk & Dairy", originalPrice: 200 },
  { id: 20, name: "Ghee (500ml)", price: 350, image: "🧈", category: "Milk & Dairy", originalPrice: 380 },
  { id: 21, name: "Cheese Slices (200g)", price: 150, image: "🧀", category: "Milk & Dairy", originalPrice: 170 },
  { id: 22, name: "Mozzarella Cheese (200g)", price: 180, image: "🧀", category: "Milk & Dairy", originalPrice: 200 },
  { id: 23, name: "Cream (200ml)", price: 60, image: "🥛", category: "Milk & Dairy", originalPrice: 70 },
  { id: 24, name: "Buttermilk (500ml)", price: 25, image: "🥛", category: "Milk & Dairy", originalPrice: 30 },
  { id: 25, name: "Lassi (250ml)", price: 35, image: "🥛", category: "Milk & Dairy", originalPrice: 40 },
  { id: 26, name: "Ice Cream (500ml)", price: 120, image: "🍦", category: "Milk & Dairy", originalPrice: 140 },
  
  // Vegetables
  { id: 27, name: "Onions (1kg)", price: 30, image: "🧅", category: "Vegetables", originalPrice: 35 },
  { id: 28, name: "Potatoes (1kg)", price: 25, image: "🥔", category: "Vegetables", originalPrice: 30 },
  { id: 29, name: "Tomatoes (1kg)", price: 40, image: "🍅", category: "Vegetables", originalPrice: 45 },
  { id: 30, name: "Carrots (500g)", price: 35, image: "🥕", category: "Vegetables", originalPrice: 40 },
  { id: 31, name: "Green Beans (500g)", price: 50, image: "🫛", category: "Vegetables", originalPrice: 55 },
  { id: 32, name: "Cauliflower (1pc)", price: 40, image: "🥬", category: "Vegetables", originalPrice: 45 },
  { id: 33, name: "Cabbage (1kg)", price: 30, image: "🥬", category: "Vegetables", originalPrice: 35 },
  { id: 34, name: "Green Chili (250g)", price: 20, image: "🌶️", category: "Vegetables", originalPrice: 25 },
  { id: 35, name: "Ginger (250g)", price: 40, image: "🫚", category: "Vegetables", originalPrice: 45 },
  { id: 36, name: "Garlic (250g)", price: 35, image: "🧄", category: "Vegetables", originalPrice: 40 },
  
  // Daal & Pulses
  { id: 37, name: "Toor Daal (1kg)", price: 95, image: "🫘", category: "Daal & Pulses", originalPrice: 105 },
  { id: 38, name: "Moong Daal (1kg)", price: 110, image: "🫘", category: "Daal & Pulses", originalPrice: 120 },
  { id: 39, name: "Masoor Daal (1kg)", price: 85, image: "🫘", category: "Daal & Pulses", originalPrice: 95 },
  { id: 40, name: "Chana Daal (1kg)", price: 90, image: "🫘", category: "Daal & Pulses", originalPrice: 100 },
  { id: 41, name: "Urad Daal (1kg)", price: 120, image: "🫘", category: "Daal & Pulses", originalPrice: 130 },
  { id: 42, name: "Rajma (1kg)", price: 140, image: "🫘", category: "Daal & Pulses", originalPrice: 150 },
  { id: 43, name: "Chickpeas (1kg)", price: 85, image: "🫛", category: "Daal & Pulses", originalPrice: 95 },
  
  // Spices & Masalas
  { id: 44, name: "Turmeric Powder (100g)", price: 45, image: "🟡", category: "Spices & Masalas", originalPrice: 50 },
  { id: 45, name: "Red Chili Powder (100g)", price: 50, image: "🌶️", category: "Spices & Masalas", originalPrice: 55 },
  { id: 46, name: "Coriander Seeds (100g)", price: 30, image: "🌿", category: "Spices & Masalas", originalPrice: 35 },
  { id: 47, name: "Garam Masala (50g)", price: 60, image: "🌶️", category: "Spices & Masalas", originalPrice: 70 },
  { id: 48, name: "Chicken Masala (100g)", price: 80, image: "🌶️", category: "Spices & Masalas", originalPrice: 90 },
  { id: 49, name: "Mutton Masala (100g)", price: 85, image: "🌶️", category: "Spices & Masalas", originalPrice: 95 },
  { id: 50, name: "Paneer Masala (100g)", price: 70, image: "🌶️", category: "Spices & Masalas", originalPrice: 80 },
  { id: 51, name: "Maggi Masala (10g)", price: 5, image: "🌶️", category: "Spices & Masalas", originalPrice: 8 },
  { id: 52, name: "Khada Masala (50g)", price: 65, image: "🌿", category: "Spices & Masalas", originalPrice: 75 },
  { id: 53, name: "Cumin Seeds (100g)", price: 40, image: "🌿", category: "Spices & Masalas", originalPrice: 45 },
  { id: 54, name: "Black Pepper (50g)", price: 120, image: "⚫", category: "Spices & Masalas", originalPrice: 130 },
  { id: 55, name: "Cardamom (50g)", price: 200, image: "🌿", category: "Spices & Masalas", originalPrice: 220 },
  { id: 56, name: "Cinnamon (50g)", price: 80, image: "🌿", category: "Spices & Masalas", originalPrice: 90 },
  { id: 57, name: "Cloves (25g)", price: 60, image: "🌿", category: "Spices & Masalas", originalPrice: 70 },
  { id: 58, name: "Bay Leaves (10g)", price: 25, image: "🍃", category: "Spices & Masalas", originalPrice: 30 },
  
  // Personal Care
  { id: 59, name: "Lux Soap (100g)", price: 35, image: "🧼", category: "Personal Care", originalPrice: 40 },
  { id: 60, name: "Dove Soap (100g)", price: 45, image: "🧼", category: "Personal Care", originalPrice: 50 },
  { id: 61, name: "Lifebuoy Soap (100g)", price: 25, image: "🧼", category: "Personal Care", originalPrice: 30 },
  { id: 62, name: "Medimix Soap (100g)", price: 30, image: "🧼", category: "Personal Care", originalPrice: 35 },
  { id: 63, name: "Head & Shoulders (200ml)", price: 180, image: "🧴", category: "Personal Care", originalPrice: 200 },
  { id: 64, name: "Clinic Plus (175ml)", price: 120, image: "🧴", category: "Personal Care", originalPrice: 140 },
  { id: 65, name: "Pantene Shampoo (200ml)", price: 160, image: "🧴", category: "Personal Care", originalPrice: 180 },
  { id: 66, name: "Hair Oil Coconut (200ml)", price: 80, image: "🥥", category: "Personal Care", originalPrice: 90 },
  { id: 67, name: "Hair Oil Mustard (200ml)", price: 70, image: "🫒", category: "Personal Care", originalPrice: 80 },
  { id: 68, name: "Toothpaste Colgate (100g)", price: 45, image: "🦷", category: "Personal Care", originalPrice: 50 },
  { id: 69, name: "Toothbrush (1pc)", price: 25, image: "🪥", category: "Personal Care", originalPrice: 30 },
  
  // Tea & Beverages
  { id: 70, name: "Tata Tea Gold (250g)", price: 150, image: "🍵", category: "Tea & Beverages", originalPrice: 170 },
  { id: 71, name: "Red Label Tea (250g)", price: 140, image: "🍵", category: "Tea & Beverages", originalPrice: 160 },
  { id: 72, name: "Brooke Bond (250g)", price: 135, image: "🍵", category: "Tea & Beverages", originalPrice: 155 },
  { id: 73, name: "Society Tea (250g)", price: 130, image: "🍵", category: "Tea & Beverages", originalPrice: 150 },
  { id: 74, name: "Girnar Tea (250g)", price: 125, image: "🍵", category: "Tea & Beverages", originalPrice: 145 },
  { id: 75, name: "Nescafe Coffee (200g)", price: 200, image: "☕", category: "Tea & Beverages", originalPrice: 220 },
  { id: 76, name: "Bru Coffee (200g)", price: 180, image: "☕", category: "Tea & Beverages", originalPrice: 200 },
  { id: 77, name: "Green Tea (100g)", price: 120, image: "🍵", category: "Tea & Beverages", originalPrice: 140 },
  { id: 78, name: "Soft Drink (500ml)", price: 40, image: "🥤", category: "Tea & Beverages", originalPrice: 45 },
  
  // Household Items
  { id: 79, name: "Plastic Bucket (20L)", price: 250, image: "🪣", category: "Household Items", originalPrice: 280 },
  { id: 80, name: "Steel Bucket (15L)", price: 400, image: "🪣", category: "Household Items", originalPrice: 450 },
  { id: 81, name: "Detergent Powder (1kg)", price: 120, image: "🧽", category: "Household Items", originalPrice: 140 },
  { id: 82, name: "Dish Soap (500ml)", price: 80, image: "🧽", category: "Household Items", originalPrice: 90 },
  { id: 83, name: "Floor Cleaner (1L)", price: 100, image: "🧽", category: "Household Items", originalPrice: 120 },
  { id: 84, name: "Toilet Paper (4 rolls)", price: 120, image: "🧻", category: "Household Items", originalPrice: 140 },
  { id: 85, name: "Garbage Bags (30pcs)", price: 60, image: "🗑️", category: "Household Items", originalPrice: 70 },
  
  // Snacks & Biscuits
  { id: 86, name: "Parle-G Biscuits (200g)", price: 40, image: "🍪", category: "Snacks & Biscuits", originalPrice: 45 },
  { id: 87, name: "Marie Gold (200g)", price: 45, image: "🍪", category: "Snacks & Biscuits", originalPrice: 50 },
  { id: 88, name: "Good Day (200g)", price: 50, image: "🍪", category: "Snacks & Biscuits", originalPrice: 55 },
  { id: 89, name: "Lays Chips (100g)", price: 25, image: "🥔", category: "Snacks & Biscuits", originalPrice: 30 },
  { id: 90, name: "Kurkure (100g)", price: 20, image: "🌽", category: "Snacks & Biscuits", originalPrice: 25 },
  { id: 91, name: "Namkeen Mix (150g)", price: 35, image: "🥜", category: "Snacks & Biscuits", originalPrice: 40 },
  { id: 92, name: "Maggi Noodles (70g)", price: 15, image: "🍜", category: "Snacks & Biscuits", originalPrice: 18 },
  
  // Animal Feed
  { id: 93, name: "Cattle Feed (25kg)", price: 800, image: "🐄", category: "Animal Feed", originalPrice: 850 },
  { id: 94, name: "Buffalo Feed (25kg)", price: 750, image: "🐃", category: "Animal Feed", originalPrice: 800 },
  { id: 95, name: "Wheat Straw (10kg)", price: 200, image: "🌾", category: "Animal Feed", originalPrice: 220 },
  { id: 96, name: "Rice Straw (10kg)", price: 180, image: "🌾", category: "Animal Feed", originalPrice: 200 },
  { id: 97, name: "Green Fodder (5kg)", price: 150, image: "🌿", category: "Animal Feed", originalPrice: 170 },
  { id: 98, name: "Mineral Mix (1kg)", price: 120, image: "⚪", category: "Animal Feed", originalPrice: 140 },
  { id: 99, name: "Salt Lick (500g)", price: 80, image: "🧂", category: "Animal Feed", originalPrice: 90 },
  { id: 100, name: "Jaggery for Animals (1kg)", price: 60, image: "🟤", category: "Animal Feed", originalPrice: 70 }
];