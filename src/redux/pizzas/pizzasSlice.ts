import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzasState } from './types';


const initialState: PizzasState = {
  pizzas: [
    {
      id: 0,
      name: 'Итальянская',
      description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
      price: 699,
      type: ['all', 'vegetarian', 'cheese'],
      sizes: [20, 30, 40],
      activeSize: 0,
      image: '/assets/images/pizzas/01.png',
    },
    {
      id: 1,
      name: 'Маргарита',
      description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
      price: 479,
      type: ['all', 'meat'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/02.png',
    },
    {
      id: 2,
      name: 'Барбекю',
      description: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
      price: 699,
      type: ['all', 'meat', 'hot'],
      sizes: [20, 30, 40],
      activeSize: 2,
      image: '/assets/images/pizzas/03.png',
    },
    {
      id: 3,
      name: 'Мясная',
      description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
      price: 699,
      type: ['all', 'meat'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/05.png',
    },
    {
      id: 4,
      name: 'Овощная',
      description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
      price: 479,
      type: ['all', 'vegetarian'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/06.png',
    },
    {
      id: 5,
      name: 'Римская',
      description: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
      price: 699,
      type: ['all', 'meat'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/07.png',
    },
    {
      id: 6,
      name: 'С грибами',
      description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
      price: 399,
      type: ['all', 'vegetarian'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/08.png',
    },
    {
      id: 7,
      name: 'Сырная',
      description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
      price: 699,
      type: ['all', 'cheese'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/09.png',
    },
    {
      id: 8,
      name: 'Четыре сыра',
      description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
      price: 479,
      type: ['all', 'cheese'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/01.png',
    },
    {
      id: 9,
      name: 'Пепперони Фреш',
      description: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
      price: 699,
      type: ['all', 'cheese', 'hot', 'meat'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/11.png',
    },
    {
      id: 10,
      name: 'Итальянская',
      description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
      price: 699,
      type: ['all', 'cheese', 'meat'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/12.png',
    },
    {
      id: 11,
      name: 'Вегетарианская',
      description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
      price: 399,
      type: ['all', 'vegetarian'],
      sizes: [20, 30, 40],
      activeSize: 1,
      image: '/assets/images/pizzas/04.png',
    },
  ]
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
