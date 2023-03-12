import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YTkkGNjFzdVaLfwvsjLv/books';
const Bookss = [];
export const booksDisplay = createAsyncThunk(
  'bookstore/books',
  async () => {
    const response = await fetch(booksURL);
    const data = await response.json();
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
  },
);

export const booksAdd = createAsyncThunk('bookstore/books/ADD_BOOK', async (book) => {
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
  return book;
});

export const removeBook = createAsyncThunk('bookstore/books/DELETE', async (id) => {
  await fetch(`${booksURL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return id;
});

const booksReducer = createSlice({
  name: 'bookstore/book/',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(booksDisplay.fulfilled, (state, action) => (
        { ...state, book: [...action.payload] }))
      .addCase(booksAdd.fulfilled, (state, action) => {
        state.book.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => (
        {
          ...state,
          book: state.book.filter((book) => book.id !== action.payload),
        }
      ));
  },
});

export { Bookss };

export default booksReducer;
