import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(0);
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0);
    }
  };

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const isProductFavorite = isFavorite(product.id);

  return (
    <View style={styles.card}>
      {discount > 0 && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}% OFF</Text>
        </View>
      )}
      
      <TouchableOpacity 
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(product)}
      >
        <Text style={styles.favoriteIcon}>
          {isProductFavorite ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.emoji}>{product.image}</Text>
      <Text style={styles.name}>{t(product.name)}</Text>
      
      <View style={styles.priceContainer}>
        {product.originalPrice && (
          <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
        )}
        <Text style={styles.price}>₹{product.price}</Text>
      </View>
      
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
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 8,
    borderRadius: 16,
    elevation: 4,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF4444',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 2,
    padding: 4,
  },
  favoriteIcon: {
    fontSize: 20,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
    marginTop: 5,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  price: {
    fontSize: 16,
    color: '#FF6B35',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 15,
    minWidth: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 2,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductCard;