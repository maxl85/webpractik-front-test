import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from './types';


const initialState: CartState = {
  visible: false,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
});

export const { showCart } = cart.actions;

export default cart.reducer;
