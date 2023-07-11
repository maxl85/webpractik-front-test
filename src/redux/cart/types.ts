export type CartItem = {
  id: string;
  image: string;
  name: string;
  size: number;
  price: number;
  count: number;
};

export interface CartState {
  items: CartItem[];
  visible: boolean;
  totalPrice: number;
}