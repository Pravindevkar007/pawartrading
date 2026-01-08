import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import TodaysOffersScreen from './screens/TodaysOffersScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { OrderHistoryProvider } from './context/OrderHistoryContext';

const Stack = createStackNavigator();

const AppContent = () => {
  const [cartItems, setCartItems] = useState([]);
  const { t, toggleLanguage, language } = useLanguage();

  const CartButton = ({ navigation }) => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    return (
      <View style={styles.headerButtons}>
        <TouchableOpacity 
          style={styles.languageButton}
          onPress={toggleLanguage}
        >
          <Text style={styles.languageButtonText}>
            {language === 'en' ? 'मराठी' : 'English'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartButtonText}>🛒 {itemCount}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            borderBottomWidth: 0,
          },
          headerBackground: () => (
            <View style={{
              flex: 1,
              backgroundColor: '#FF6B35',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
            }} />
          ),
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#FFFFFF',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => (
            <HomeScreen 
              {...props} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen 
          name="Category" 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => (
            <CategoryScreen 
              {...props} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen 
          name="TodaysOffers" 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => (
            <TodaysOffersScreen 
              {...props} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen 
          name="Search" 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => (
            <SearchScreen 
              {...props} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen 
          name="Favorites" 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => (
            <FavoritesScreen 
              {...props} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen 
          name="Contact" 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => <ContactScreen {...props} />}
        </Stack.Screen>
        
        <Stack.Screen 
          name="Cart" 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => (
            <CartScreen 
              {...props} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen 
          name="Receipt" 
          options={({ navigation }) => ({
            title: '',
            headerLeft: null,
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        >
          {(props) => (
            <ReceiptScreen 
              {...props} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <OrderHistoryProvider>
          <AppContent />
        </OrderHistoryProvider>
      </FavoritesProvider>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },
  languageButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.8)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  languageButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  cartButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.8)',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});