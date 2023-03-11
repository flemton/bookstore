import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
