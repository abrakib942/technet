import { configureStore } from '@reduxjs/toolkit';
import cart from './features/cart/cartSlice';
import product from './features/product/productSlice';

const store = configureStore({
  reducer: {
    cart,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
