import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

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
            backgroundColor: '#97292c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
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
          name="Cart" 
          options={{
            title: t('cart'),
          }}
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
          options={{
            title: t('receipt'),
            headerLeft: null,
          }}
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
      <AppContent />
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageButton: {
    backgroundColor: '#97292c',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  languageButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#97292c',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});