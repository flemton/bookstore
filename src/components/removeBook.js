import { createAsyncThunk } from '@reduxjs/toolkit';

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YTkkGNjFzdVaLfwvsjLv/books';
const removeBook = createAsyncThunk('bookstore/books/DELETE', async (id) => {
  await fetch(`${booksURL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return id;
});

export default removeBook;
