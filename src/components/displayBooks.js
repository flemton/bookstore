import { createAsyncThunk } from '@reduxjs/toolkit';

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YTkkGNjFzdVaLfwvsjLv/books';
const booksDisplay = createAsyncThunk(
  'bookstore/books',
  async () => {
    const formatted = [];
    const response = await fetch(booksURL);
    const data = await response.json();
    Object.entries(data).forEach(([key, value]) => {
      formatted.push({
        key,
        author: value[0].author,
        title: value[0].title,
        category: value[0].category,
      });
    });
    return formatted;
  },
);

export default booksDisplay;
