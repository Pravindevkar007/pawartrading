import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const Receipt = ({ cartItems, customerName = "Customer" }) => {
  const { t } = useLanguage();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + tax;
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.receipt}>
        <Text style={styles.header}>{t('storeName')}</Text>
        <Text style={styles.subHeader}>{t('storeSubtitle')}</Text>
        <Text style={styles.divider}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>{t('date')}: {currentDate}</Text>
          <Text style={styles.infoText}>{t('time')}: {currentTime}</Text>
        </View>
        <Text style={styles.infoText}>{t('customer')}: {customerName}</Text>
        
        <Text style={styles.divider}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
        
        {cartItems.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.itemName}>{t(item.name)}</Text>
            <Text style={styles.itemDetails}>
              {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
            </Text>
          </View>
        ))}
        
        <Text style={styles.divider}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
        
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>{t('subtotal')}:</Text>
          <Text style={styles.totalValue}>₹{subtotal}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>{t('tax')}:</Text>
          <Text style={styles.totalValue}>₹{tax}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.grandTotal}>{t('total')}: ₹{total}</Text>
        </View>
        
        <Text style={styles.divider}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
        <Text style={styles.footer}>{t('thankYou')}</Text>
        <Text style={styles.footer}>{t('visitAgain')}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  receipt: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
  },
  divider: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
  itemRow: {
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  totalLabel: {
    fontSize: 16,
  },
  totalValue: {
    fontSize: 16,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default Receipt;