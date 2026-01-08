import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const SearchScreen = ({ navigation, cartItems, setCartItems }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter(product => {
      const translatedName = t(product.name) || product.name;
      const translatedCategory = t(product.category.toLowerCase().replace(/\s+/g, '').replace('&', '')) || product.category;
      
      return translatedName.toLowerCase().includes(query.toLowerCase()) ||
             product.name.toLowerCase().includes(query.toLowerCase()) ||
             translatedCategory.toLowerCase().includes(query.toLowerCase()) ||
             product.category.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(filtered);
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

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
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      
      {searchQuery === '' ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>🔍</Text>
          <Text style={styles.emptyTitle}>{t('searchProducts')}</Text>
          <Text style={styles.emptySubtitle}>{t('searchMessage')}</Text>
        </View>
      ) : searchResults.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>😔</Text>
          <Text style={styles.emptyTitle}>{t('noResults')}</Text>
          <Text style={styles.emptySubtitle}>{t('tryDifferentSearch')}</Text>
        </View>
      ) : (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsHeader}>
            {searchResults.length} {t('resultsFound')} "{searchQuery}"
          </Text>
          <FlatList
            data={searchResults}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.productList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  resultsContainer: {
    flex: 1,
  },
  resultsHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  productList: {
    padding: 15,
  },
});

export default SearchScreen;