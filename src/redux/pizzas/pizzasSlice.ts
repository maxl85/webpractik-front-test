import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzasState } from './types';

import { pizzas } from '../../data/pizzas';


const initialState: PizzasState = {
  pizzas: pizzas,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setActiveSize: (state, action: PayloadAction<{pizzaId: number ,activeSize: number}>) => {
      state.pizzas[action.payload.pizzaId].activeSize = action.payload.activeSize;
    },
  },
});

export const { setActiveSize } = pizzasSlice.actions;

export default pizzasSlice.reducer;
