import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const { width } = Dimensions.get('window');

const CarouselBanner = ({ ads }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [ads.length]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        contentOffset={{ x: currentIndex * width, y: 0 }}
      >
        {ads.map((ad) => (
          <View
            key={ad.id}
            style={[styles.slide, { backgroundColor: ad.backgroundColor }]}
          >
            <Text style={styles.emoji}>{ad.image}</Text>
            <Text style={[styles.title, { color: ad.textColor }]}>{t(ad.title)}</Text>
            <Text style={[styles.subtitle, { color: ad.textColor }]}>{t(ad.subtitle)}</Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.pagination}>
        {ads.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? '#FF6B35' : '#E0E0E0' }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginBottom: 20,
  },
  slide: {
    width,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default CarouselBanner;