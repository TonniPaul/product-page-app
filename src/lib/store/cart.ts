import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

interface CartItem {
   id: number;
   title: string;
   price: number;
   image: string;
}

interface Cart {
   count: number;
   items: CartItem[];
}

const initialCart: Cart = {
   count: 0,
   items: [],
};

export const cart: Writable<Cart> = writable(initialCart);

export const updateCart = (count: number, items: CartItem[]) => {
   cart.set({ count, items });
};

export const removeFromCart = () => {
   cart.set({count: 0, items: []})
}
