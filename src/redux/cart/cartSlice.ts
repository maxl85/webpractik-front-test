import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  visible: boolean;
}

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
