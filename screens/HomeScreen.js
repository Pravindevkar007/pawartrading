import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import CarouselBanner from '../components/CarouselBanner';
import ProductCard from '../components/ProductCard';
import { categories, carouselAds, todaysOffers } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useOrderHistory } from '../context/OrderHistoryContext';

const HomeScreen = ({ navigation, cartItems, setCartItems }) => {
  const { t } = useLanguage();
  const { recentlyPurchased } = useOrderHistory();
  const [refreshing, setRefreshing] = useState(false);
  
  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category });
  };

  const handleOffersPress = () => {
    navigation.navigate('TodaysOffers');
  };

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  const handleFavoritesPress = () => {
    navigation.navigate('Favorites');
  };

  const handleContactPress = () => {
    navigation.navigate('Contact');
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

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const renderCategory = ({ item }) => (
    <CategoryCard category={item} onPress={handleCategoryPress} />
  );

  const renderOfferItem = ({ item }) => {
    const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
    return (
      <View style={styles.offerItem}>
        <View style={styles.offerBadge}>
          <Text style={styles.offerBadgeText}>{discount}% OFF</Text>
        </View>
        <Text style={styles.offerEmoji}>{item.image}</Text>
        <Text style={styles.offerName}>{t(item.name)}</Text>
        <Text style={styles.offerPrice}>₹{item.price}</Text>
      </View>
    );
  };

  const renderRecentItem = ({ item }) => (
    <ProductCard product={item} onAddToCart={handleAddToCart} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Image 
            source={require('../photos/1705840-6397.jpg')}
            style={styles.logoImage}
          />
          <View style={styles.headerText}>
            <Text style={styles.header}>{t('storeName')}</Text>
            <Text style={styles.subHeader}>{t('tagline')}</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleSearchPress}>
            <Text style={styles.actionIcon}>🔍</Text>
            <Text style={styles.actionText}>{t('search')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleFavoritesPress}>
            <Text style={styles.actionIcon}>❤️</Text>
            <Text style={styles.actionText}>{t('favorites')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleOffersPress}>
            <Text style={styles.actionIcon}>🔥</Text>
            <Text style={styles.actionText}>{t('offers')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleContactPress}>
            <Text style={styles.actionIcon}>📞</Text>
            <Text style={styles.actionText}>{t('contact')}</Text>
          </TouchableOpacity>
        </View>

        {/* Carousel Banner */}
        <CarouselBanner ads={carouselAds} />

        {/* Today's Offers Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🔥 {t('todaysOffers')}</Text>
            <TouchableOpacity onPress={handleOffersPress}>
              <Text style={styles.viewAllText}>{t('viewAll')}</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={todaysOffers.slice(0, 4)}
            renderItem={renderOfferItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.offersList}
          />
        </View>

        {/* Recently Purchased Section */}
        {recentlyPurchased.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>🔄 {t('recentlyPurchased')}</Text>
            
            <FlatList
              data={recentlyPurchased.slice(0, 4)}
              renderItem={renderRecentItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.offersList}
            />
          </View>
        )}

        {/* Categories Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>📋 {t('shopByCategory')}</Text>
          
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6B35",
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  viewAllText: {
    fontSize: 14,
    color: "#FF6B35",
    fontWeight: '600',
  },
  offersList: {
    paddingRight: 15,
    paddingVertical: 5,
  },
  offerItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginRight: 12,
    marginTop: 10,
    marginBottom: 5,
    width: 130,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    position: 'relative',
  },
  offerBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1,
  },
  offerBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  offerEmoji: {
    fontSize: 32,
    marginBottom: 8,
    marginTop: 15,
  },
  offerName: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
    lineHeight: 16,
  },
  offerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 5,
  },
  categoriesList: {
    paddingBottom: 20,
  },
});

export default HomeScreen;