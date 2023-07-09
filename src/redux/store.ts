import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/cartSlice';
import filter from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    cart,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;