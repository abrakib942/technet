import { configureStore } from '@reduxjs/toolkit';
import cart from './features/cart/cartSlice';
import product from './features/product/productSlice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    cart,
    product,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
