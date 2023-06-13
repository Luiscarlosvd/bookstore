import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fZ7NxvQuT6TyrOKqVzc3/books';

const initialState = {
  booksArr: [],
  status: 'idle',
  error: null,
};

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const response = await axios.get(API_URL);
    if (typeof response.data !== 'object') {
      return {};
    }
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postBooks = createAsyncThunk('book/postBooks', async (newBook) => {
  try {
    const response = await axios.post(API_URL, newBook);
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
      const index = book.item_id;

      state.booksArr[index] = [book];

      state.booksArr[index][0] = {
        title: book.title,
        author: book.author,
        category: book.category,
      };
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
      })
      .addCase(postBooks.fulfilled, (state) => {
        state.status = 'fulfilled';
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
