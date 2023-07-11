import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from './types';


const initialState: CartState = {
  visible: false,
  items: [],
  totalPrice: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find(item => item.id === action.payload.id );
      
      if (findItem) {
        findItem.count++;
      }
      else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    
    
    
  },
});

export const { showCart } = cart.actions;

export default cart.reducer;
