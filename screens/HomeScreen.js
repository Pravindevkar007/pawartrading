import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const HomeScreen = ({ navigation, cartItems, setCartItems }) => {
  const { t } = useLanguage();
  const handleAddToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onAddToCart={handleAddToCart} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>PTC</Text>
        <Text style={styles.header}>{t('storeName')}</Text>
      </View>
      <Text style={styles.subHeader}>{t('tagline')}</Text>
      
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#2e7d32',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
    marginRight: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default HomeScreen;