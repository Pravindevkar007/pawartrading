import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const ContactScreen = ({ navigation }) => {
  const { t } = useLanguage();

  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleWhatsApp = (number) => {
    Linking.openURL(`whatsapp://send?phone=91${number}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t('contactUs')}</Text>
          <Text style={styles.headerSubtitle}>{t('getInTouch')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👥 {t('owners')}</Text>
          
          <View style={styles.ownerCard}>
            <Text style={styles.ownerName}>{t('Sunny Pawar')}</Text>
            <View style={styles.ownerActions}>
              <TouchableOpacity style={styles.ownerActionButton} onPress={() => handleCall('9876543210')}>
                <Text style={styles.ownerActionIcon}>📞</Text>
                <Text style={styles.ownerActionText}>{t('call')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ownerActionButton} onPress={() => handleWhatsApp('9876543210')}>
                <Text style={styles.ownerActionIcon}>💬</Text>
                <Text style={styles.ownerActionText}>{t('whatsapp')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.ownerCard}>
            <Text style={styles.ownerName}>{t('Suraj Pawar')}</Text>
            <View style={styles.ownerActions}>
              <TouchableOpacity style={styles.ownerActionButton} onPress={() => handleCall('9123456789')}>
                <Text style={styles.ownerActionIcon}>📞</Text>
                <Text style={styles.ownerActionText}>{t('call')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ownerActionButton} onPress={() => handleWhatsApp('9123456789')}>
                <Text style={styles.ownerActionIcon}>💬</Text>
                <Text style={styles.ownerActionText}>{t('whatsapp')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏪 {t('businessNames')}</Text>
          <View style={styles.businessCard}>
            <Text style={styles.businessName}>• {t('pawarTradingCompany')}</Text>
            <Text style={styles.businessName}>• {t('shivSaiPashukhadya')}</Text>
            <Text style={styles.businessName}>• {t('annapurnaMilkProduction')}</Text>
            <Text style={styles.businessName}>• {t('shivshaktiTraders')}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📍 {t('address')}</Text>
          <View style={styles.addressCard}>
            <Text style={styles.addressText}>{t('addressLine1')}</Text>
            <Text style={styles.addressText}>{t('addressLine2')}</Text>
            <Text style={styles.addressText}>{t('addressLine3')}</Text>
            <Text style={styles.addressText}>{t('addressLine4')}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  ownerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  ownerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 10,
    textAlign: 'center',
  },
  ownerActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ownerActionButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    minWidth: 80,
  },
  ownerActionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  ownerActionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  businessCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  businessName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  addressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  addressText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    lineHeight: 22,
  },
  contactActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    minWidth: 120,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default ContactScreen;