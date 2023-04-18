import { createSlice } from '@reduxjs/toolkit';
import books from '../../components/books';
import booksDisplay from '../../components/displayBooks';
import booksAdd from '../../components/AddBook';
import removeBook from '../../components/removeBook';

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(booksDisplay.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
      }))
      .addCase(booksAdd.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => (
        {
          ...state,
          book: state.books.filter((book) => book.key !== action.payload),
        }
      ));
  },
});

export default booksSlice.reducer;
