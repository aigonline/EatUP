import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => {
    return sum + (parseFloat(item.price) * item.quantity);
  }, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      state.total = calculateTotal(state.items);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = calculateTotal(state.items);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
      
      state.total = calculateTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;