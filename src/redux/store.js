import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    books: booksReducer,
  },
});

export default store;
