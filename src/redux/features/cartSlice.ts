import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@src/types';

interface CartState {
  cart: Product[];
  totalAmount: number;
}
const initialState: CartState = {
  cart: [],
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cart } = state;
      const isItemPresentAtIndex = cart.findIndex(
        item => item.id === action.payload.id,
      );
      if (isItemPresentAtIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[isItemPresentAtIndex] = {
          ...updatedCart[isItemPresentAtIndex],
          quantity: updatedCart[isItemPresentAtIndex].quantity
            ? updatedCart[isItemPresentAtIndex].quantity + 1
            : 1,
        };
        const totalAmount = updatedCart.reduce(
          (accumulator, currentItem) =>
            currentItem.quantity
              ? accumulator + currentItem.price * currentItem.quantity
              : 0,
          0,
        );
        return {
          ...state,
          cart: updatedCart,
          totalAmount: totalAmount,
        };
      } else {
        const finalData = [...cart, { ...action.payload, quantity: 1 }];
        const totalAmount = finalData.reduce(
          (accumulator, currentItem) =>
            currentItem.quantity
              ? accumulator + currentItem.price * currentItem.quantity
              : 0,
          0,
        );
        return {
          ...state,
          cart: finalData,
          totalAmount: totalAmount,
        };
      }
    },
    removeFromCart: (state, action) => {
      const { cart } = state;
      const isItemPresentAtIndex = cart.findIndex(
        item => item.id === action.payload.id,
      );
      const updatedCart = [...cart];

      if (isItemPresentAtIndex !== -1) {
        if (
          updatedCart[isItemPresentAtIndex].quantity &&
          updatedCart[isItemPresentAtIndex].quantity > 1
        ) {
          updatedCart[isItemPresentAtIndex] = {
            ...updatedCart[isItemPresentAtIndex],
            quantity: updatedCart[isItemPresentAtIndex].quantity
              ? updatedCart[isItemPresentAtIndex].quantity - 1
              : 0,
          };
        }
      } else {
        updatedCart.splice(isItemPresentAtIndex, 1);
      }
      const totalAmount = updatedCart.reduce(
        (accumulator, currentItem) =>
          currentItem.quantity
            ? accumulator + currentItem.price * currentItem.quantity
            : 0,
        0,
      );
      return {
        ...state,
        cart: updatedCart,
        totalAmount: totalAmount,
      };
    },
    clearCart: (state, action) => {
      return initialState;
    },
  },
});
export default CartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
