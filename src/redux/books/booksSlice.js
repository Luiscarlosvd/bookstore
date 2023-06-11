import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksArr.push(action.payload);
    },
    removeBook: () => {

    },
  },
});

export const { addBook, removeBook, } = booksSlice.actions;
export default booksSlice.reducer;