import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(0);
  const { t } = useLanguage();

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{product.image}</Text>
      <Text style={styles.name}>{t(product.name)}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setQuantity(Math.max(0, quantity - 1))}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setQuantity(quantity + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonText}>{t('addToCart')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 8,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    width: '45%',
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e0e0e0',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 15,
    minWidth: 20,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductCard;