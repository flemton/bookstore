import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import books from '../../components/books';

const initialState = {
  books,
};

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YTkkGNjFzdVaLfwvsjLv/books';

const booksDisplay = createAsyncThunk(
  'bookstore/books',
  async () => {
    const response = await fetch(booksURL);
    const data = response.json;
    const Bookss = [];
    Object.keys(data).forEach((ind) => {
      const each = {
        id: ind,
        title: data[ind][0].title,
        author: data[ind][0].author,
        category: data[ind][0].category,
      };
      Bookss.push(each);
    });
    return Bookss;
  });

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
