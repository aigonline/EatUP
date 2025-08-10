import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

// This would normally be from an API or Redux store
const CATEGORIES = [
  { id: 1, name: 'Appetizers', icon: '🍤' },
  { id: 2, name: 'Main Course', icon: '🍲' },
  { id: 3, name: 'Desserts', icon: '🍰' },
  { id: 4, name: 'Drinks', icon: '🍹' },
];

const POPULAR_ITEMS = [
  { id: 1, name: 'Grilled Salmon', price: '$24.99', image: '🐟' },
  { id: 2, name: 'Beef Wellington', price: '$32.99', image: '🥩' },
  { id: 3, name: 'Mushroom Risotto', price: '$18.99', image: '🍚' },
  { id: 4, name: 'Chocolate Soufflé', price: '$12.99', image: '🍮' },
];


type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function HomeScreen({ navigation: StackNavigationProp }: HomeScreenProps) {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Welcome to Our Restaurant</Text>
        <Text style={styles.heroSubtitle}>Experience fine dining at home</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
      
      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Popular Items Section */}
      <Text style={styles.sectionTitle}>Popular This Week</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularContainer}>
        {POPULAR_ITEMS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.popularItem}>
            <Text style={styles.itemImage}>{item.image}</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Special Offers */}
      <Text style={styles.sectionTitle}>Special Offers</Text>
      <View style={styles.offerContainer}>
        <Text style={styles.offerIcon}>🎉</Text>
        <View style={styles.offerContent}>
          <Text style={styles.offerTitle}>20% OFF YOUR FIRST ORDER</Text>
          <Text style={styles.offerDescription}>Use code: WELCOME20</Text>
        </View>
      </View>
      
      {/* Footer Space */}
      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  heroContainer: {
    backgroundColor: '#1B4332',
    padding: 24,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 24,
  },
  heroButton: {
    backgroundColor: '#52B788',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B4332',
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  categoryItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginRight: 12,
    alignItems: 'center',
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#343A40',
    textAlign: 'center',
  },
  popularContainer: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  popularItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    width: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  itemImage: {
    fontSize: 48,
    marginBottom: 12,
    textAlign: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343A40',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: '#52B788',
    fontWeight: 'bold',
  },
  offerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  offerIcon: {
    fontSize: 48,
    marginRight: 16,
  },
  offerContent: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B4332',
    marginBottom: 4,
  },
  offerDescription: {
    fontSize: 14,
    color: '#343A40',
  },
});