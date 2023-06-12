import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const { booksArr } = useSelector((state) => state.book);

  return (
    <div>
      {booksArr.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          bookname={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </div>
  );
};

export default BooksList;
