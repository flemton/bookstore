import { createAsyncThunk } from '@reduxjs/toolkit';

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YTkkGNjFzdVaLfwvsjLv/books';
const booksAdd = createAsyncThunk('bookstore/books/ADD_BOOK', async (book) => {
  console.log('Post Fetch');
  await fetch(booksURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  });
  console.log('Data written');
  return book;
});

export default booksAdd;
