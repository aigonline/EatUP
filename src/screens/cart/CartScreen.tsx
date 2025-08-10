import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeItem, updateQuantity, clearCart, CartItem } from '../../store/slices/cartSlice';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Menu: undefined;
  Checkout: undefined;
  Cart: undefined;
  // Add other routes as needed
};

type CartScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

interface CartScreenProps {
  navigation: CartScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'Cart'>;
}

export default function CartScreen({ navigation }: CartScreenProps) {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: string, change: number) => {
    const item = items.find((item: CartItem) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      } else {
        dispatch(removeItem(id));
      }
    }
  };

  const handleCheckout = () => {
    // In a real app, navigate to checkout screen
    alert('Proceeding to checkout!');
    // navigation.navigate('Checkout');
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemImage}>{item.image}</Text>
      
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity 
          style={styles.quantityButton} 
          onPress={() => handleQuantityChange(item.id, -1)}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        
        <Text style={styles.quantity}>{item.quantity}</Text>
        
        <TouchableOpacity 
          style={styles.quantityButton} 
          onPress={() => handleQuantityChange(item.id, 1)}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      
      {items.length > 0 ? (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderCartItem}
            contentContainerStyle={styles.cartList}
          />
          
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.clearButton} 
              onPress={() => dispatch(clearCart())}
            >
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.checkoutButton} 
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity 
            style={styles.shopButton}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={styles.shopButtonText}>Browse Menu</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1B4332',
  },
  cartList: {
    flexGrow: 1,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  itemImage: {
    fontSize: 40,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
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
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#E9ECEF',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343A40',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343A40',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B4332',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#E9ECEF',
    paddingVertical: 16,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#343A40',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkoutButton: {
    flex: 2,
    backgroundColor: '#1B4332',
    paddingVertical: 16,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#6C757D',
    marginBottom: 24,
  },
  shopButton: {
    backgroundColor: '#1B4332',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  shopButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});