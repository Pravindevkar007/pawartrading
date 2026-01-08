import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const CategoryCard = ({ category, onPress }) => {
  const { t } = useLanguage();
  
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: category.color || '#FFFFFF' }]} 
      onPress={() => onPress(category)}
    >
      <View style={styles.imageContainer}>
        <Text style={styles.image}>{category.image}</Text>
      </View>
      <Text style={styles.name}>{t(category.name.toLowerCase().replace(/\s+/g, '').replace('&', ''))}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    minHeight: 140,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  image: {
    fontSize: 35,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoryCard;