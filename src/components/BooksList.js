import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const { booksArr } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const books = Object.keys(booksArr).map((key) => {
    const book = booksArr[key][0];
    return (
      <Book
        key={key}
        id={key}
        bookname={book.title}
        author={book.author}
        category={book.category}
      />
    );
  });
  return (
    <div>
      {books}
    </div>
  );
};

export default BooksList;
