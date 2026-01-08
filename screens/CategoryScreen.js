import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const CategoryScreen = ({ route, navigation, cartItems, setCartItems }) => {
  const { category } = route.params;
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
      <Text style={styles.header}>{t(category.name.toLowerCase().replace(/\s+/g, '').replace('&', ''))}</Text>
      
      <FlatList
        data={category.subcategories}
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#97292c",
    textAlign: "center",
    marginVertical: 20,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default CategoryScreen;