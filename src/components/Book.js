import React from 'react';
import PropTypes from 'prop-types';
import './styles/book.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, bookname, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="description">
        <div>
          <span>{category}</span>
          <h2>{bookname}</h2>
          <span>{author}</span>
        </div>
        <div>
          <button
            type="button"
            className="button-remove"
            onClick={() => {
              dispatch(deleteBook(id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="progress section">
        <button type="button" className="button-progress">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  bookname: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
