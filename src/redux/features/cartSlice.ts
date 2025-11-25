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
      const calculateTotal = (products: Product[]) => {
        return products.reduce((accumalator, currentItem) => {
          return currentItem.quantity
            ? accumalator + currentItem.quantity * currentItem.price
            : accumalator + currentItem.price;
        }, 0);
      };
      if (isItemPresentAtIndex != -1) {
        const updateCart = [...cart];
        updateCart[isItemPresentAtIndex] = {
          ...updateCart[isItemPresentAtIndex],
          quantity: updateCart[isItemPresentAtIndex].quantity
            ? updateCart[isItemPresentAtIndex].quantity + 1
            : 1,
        };
        const totalAmount = calculateTotal(updateCart);
        return {
          ...state,
          cart: updateCart,
          totalAmount: totalAmount,
        };
      } else {
        const updatedCart = [
          ...cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
        const totalAmount = calculateTotal(updatedCart);
        return {
          ...state,
          cart: updatedCart,
          totalAmount: totalAmount,
        };
      }
    },
    removeFromCart: (state, action) => {
      const { cart } = state;
      const isItemPresentAtIndex = cart.findIndex(
        item => item.id === action.payload.id,
      );
      const updateCart = [...cart];

      const calculateTotal = (products: Product[]) => {
        return products.reduce((accumalator, currentItem) => {
          return currentItem.quantity
            ? accumalator + currentItem.quantity * currentItem.price
            : accumalator + currentItem.price;
        }, 0);
      };
      if (isItemPresentAtIndex !== -1) {
        if (
          updateCart[isItemPresentAtIndex].quantity &&
          updateCart[isItemPresentAtIndex].quantity > 1
        ) {
          updateCart[isItemPresentAtIndex] = {
            ...updateCart[isItemPresentAtIndex],
            quantity: updateCart[isItemPresentAtIndex].quantity - 1,
          };
        } else {
          updateCart.splice(isItemPresentAtIndex, 1);
        }
      }
      const totalAmount = calculateTotal(updateCart);
      return {
        ...state,
        cart: updateCart,
        totalAmount: totalAmount,
      };
    },
    clearCart: state => {
      return initialState;
    },
  },
});
export default CartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
