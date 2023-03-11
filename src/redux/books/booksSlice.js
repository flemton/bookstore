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
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
