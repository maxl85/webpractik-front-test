import { RootState } from '../store';

export const selectCartVisible = (state: RootState) => state.cart.visible;