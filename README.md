# Pawar Traders - Mobile Grocery App

A React Native mobile application for grocery shopping with cart functionality and receipt generation.

## Features

- 📱 Cross-platform (Android & iOS)
- 🌐 Multilingual support (English, Hindi, Marathi)
- 🛒 Product catalog with images
- ➕ Quantity selection
- 🛍️ Shopping cart management
- 🧾 Receipt generation
- 💰 Total calculation with tax

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Step 1: Install Expo CLI
```bash
npm install -g expo-cli
```

### Step 2: Install Dependencies
```bash
cd PawarTraders
npm install
```

### Step 3: Start Development Server
```bash
npm start
```

### Step 4: Run on Device

#### Option A: Using Expo Go App (Recommended for testing)
1. Install "Expo Go" app from Play Store/App Store
2. Scan QR code from terminal/browser
3. App will load on your device

#### Option B: Android Emulator
```bash
npm run android
```

#### Option C: iOS Simulator (Mac only)
```bash
npm run ios
```

## Building for Production

### Android APK
```bash
expo build:android
```

### iOS IPA
```bash
expo build:ios
```

## App Structure

```
PawarTraders/
├── App.js                 # Main app with navigation
├── components/
│   ├── ProductCard.js     # Product display component
│   ├── Cart.js           # Cart management component
│   ├── Receipt.js        # Receipt generation component
│   └── LanguageSelector.js # Language selection component
├── screens/
│   ├── HomeScreen.js     # Product listing screen
│   ├── CartScreen.js     # Shopping cart screen
│   └── ReceiptScreen.js  # Receipt display screen
├── context/
│   └── LanguageContext.js # Language context provider
├── data/
│   ├── products.js       # Product data
│   └── translations.js   # Translation data
└── package.json          # Dependencies

```

## Usage

1. **Select Language**: Choose from English, Hindi, or Marathi using the language selector
2. **Browse Products**: View all grocery items on home screen
3. **Add to Cart**: Select quantity and add items to cart
4. **Manage Cart**: View, modify, or remove items from cart
5. **Checkout**: Generate receipt with total amount and tax
6. **New Order**: Start fresh order after completing purchase

## Customization

### Adding New Products
Edit `data/products.js` to add more grocery items:

```javascript
{
  id: 11,
  name: "Product Name",
  price: 100,
  image: "🥕", // Use emoji or replace with image URL
  category: "Category"
}
```

### Modifying Tax Rate
In `components/Receipt.js`, change tax calculation:
```javascript
const tax = Math.round(subtotal * 0.05); // Change 0.05 to desired rate
```

### Adding New Languages
To add support for additional languages:

1. Edit `data/translations.js` to add new language translations:
```javascript
export const translations = {
  en: { /* English translations */ },
  hi: { /* Hindi translations */ },
  mr: { /* Marathi translations */ },
  // Add new language here
  es: { /* Spanish translations */ }
};
```

2. Update the language options in `components/LanguageSelector.js`:
```javascript
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  // Add new language option
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];
```

## Support

For issues or questions, contact the development team.

---
**Pawar Traders** - Fresh Groceries at Best Prices 🛒