import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const { booksArr, status, error } = useSelector((state) => state.book);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
    }
  }, [status, dispatch]);

  let bookListContent = '';
  if (status === 'Loading') {
    bookListContent = <p>Loading...</p>;
  } else if (status === 'fulfilled') {
    bookListContent = Object.keys(booksArr).map((key) => {
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
  } else {
    bookListContent = <p>{error}</p>;
  }

  return (
    <div>
      {bookListContent}
    </div>
  );
};

export default BooksList;
