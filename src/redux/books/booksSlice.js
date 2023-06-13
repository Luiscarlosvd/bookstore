import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1Ab69h0mHSwiqdzadV5U/books';

const initialState = {
  booksArr: [],
  status: 'idle',
  error: null,
};

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.booksArr.push(book);
    },
    removeBook: (state, { payload }) => {
      state.booksArr = state.booksArr.filter((book) => book.item_id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.booksArr = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
