import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import Receipt from '../components/Receipt';
import { useLanguage } from '../context/LanguageContext';

const ReceiptScreen = ({ navigation, cartItems, setCartItems }) => {
  const { t } = useLanguage();
  const handleNewOrder = () => {
    setCartItems([]);
    navigation.navigate('Home');
  };

  const handlePrint = () => {
    Alert.alert(t('printReceipt'), 'Receipt printing functionality would be implemented here');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>{t('back')}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{t('orderReceipt')}</Text>
        <View style={styles.placeholder} />
      </View>
      
      <Receipt cartItems={cartItems} />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.printButton} onPress={handlePrint}>
          <Text style={styles.buttonText}>{t('printReceipt')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.newOrderButton} onPress={handleNewOrder}>
          <Text style={styles.buttonText}>{t('newOrder')}</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  printButton: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    flex: 0.45,
  },
  newOrderButton: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    flex: 0.45,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReceiptScreen;