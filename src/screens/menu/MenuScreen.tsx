import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';

// Mock data - in a real app, this would come from an API
const MENU_ITEMS = [
  { id: '1', name: 'Caesar Salad', category: 'Appetizers', price: '10.99', description: 'Fresh romaine lettuce with our homemade Caesar dressing', image: '🥗' },
  { id: '2', name: 'Garlic Bread', category: 'Appetizers', price: '6.99', description: 'Toasted bread with garlic butter and herbs', image: '🍞' },
  { id: '3', name: 'Filet Mignon', category: 'Mains', price: '29.99', description: '8oz center-cut filet, cooked to perfection', image: '🥩' },
  { id: '4', name: 'Grilled Salmon', category: 'Mains', price: '24.99', description: 'Atlantic salmon with lemon herb butter', image: '🐟' },
  { id: '5', name: 'Mushroom Risotto', category: 'Mains', price: '18.99', description: 'Creamy arborio rice with wild mushrooms', image: '🍚' },
  { id: '6', name: 'Chocolate Lava Cake', category: 'Desserts', price: '8.99', description: 'Warm chocolate cake with a molten center', image: '🍰' },
  { id: '7', name: 'Crème Brûlée', category: 'Desserts', price: '7.99', description: 'Classic vanilla custard with caramelized sugar', image: '🍮' },
  { id: '8', name: 'Red Wine', category: 'Drinks', price: '12.99', description: 'Glass of house red wine', image: '🍷' },
  { id: '9', name: 'Craft Beer', category: 'Drinks', price: '6.99', description: 'Local IPA', image: '🍺' },
];

const CATEGORIES = ['All', 'Appetizers', 'Mains', 'Desserts', 'Drinks'];

export default function MenuScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
const dispatch = useDispatch();
  const filteredItems = MENU_ITEMS.filter(item => {
    // Apply category filter (except 'All' which shows everything)
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    
    // Apply search filter if there's a query
    const searchMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const handleAddToCart = (item: typeof MENU_ITEMS[0]) => {
    dispatch(addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    }));
    
    // Show feedback to user
    alert(`${item.name} added to cart!`);
  };
  const renderMenuItem = ({ item }: { item: typeof MENU_ITEMS[0] }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemImage}>{item.image}</Text>
      <View style={styles.menuItemContent}>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <Text style={styles.menuItemDescription} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.menuItemPrice}>${item.price}</Text>
      </View>
      
      <TouchableOpacity style={styles.addButton}
      onPress={() => handleAddToCart(item)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search menu..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      {/* Category Filters */}
      <View style={styles.categories}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                activeCategory === item && styles.categoryButtonActive
              ]}
              onPress={() => setActiveCategory(item)}
            >
              <Text 
                style={[
                  styles.categoryButtonText,
                  activeCategory === item && styles.categoryButtonTextActive
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      
      {/* Menu Items List */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.menuList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  searchInput: {
    backgroundColor: 'white',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  categories: {
    paddingLeft: 16,
    marginBottom: 8,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  categoryButtonActive: {
    backgroundColor: '#1B4332',
  },
  categoryButtonText: {
    color: '#343A40',
    fontWeight: '500',
  },
  categoryButtonTextActive: {
    color: 'white',
  },
  menuList: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemImage: {
    fontSize: 40,
    marginRight: 16,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343A40',
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 8,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#52B788',
  },
  addButton: {
    backgroundColor: '#1B4332',
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function handleAddToCart(item: { id: string; name: string; category: string; price: string; description: string; image: string; }): void {
    throw new Error('Function not implemented.');
}
