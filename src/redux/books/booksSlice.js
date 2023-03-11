import {
  createSlice,
} from '@reduxjs/toolkit';
import books from '../../components/books';

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
    checkStatus: (state, action) => ({
      ...state,
      books: state.books.find((book) => book.id === action.payload.id),
    }),
  },
});

export const { removeBook, addBook, checkStatus } = booksSlice.actions;

export default booksSlice.reducer;
