import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, bookname, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-90 mx-auto my-2 flex justify-between px-18rem py-2rem sm:px-9.188rem sm:py-1.625rem border border-gray-300">
      <div className="flex flex-col gap-1.75">
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
        <button type="button" className="w-11.5 h-10 border-gray-300 bg-slate-400 p-2">Update Progress</button>
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
