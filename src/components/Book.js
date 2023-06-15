import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, bookname, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-10/12 mx-auto my-9 flex justify-between rounded pl-8 py-7 pr-28 sm:px-9.188rem sm:py-1.625rem border border-gray-300">
      <div className="flex flex-col gap-1.5">
        <div>
          <p className="font-montserrat font-semibold tracking-wide text-black text-sm opacity-50">{category}</p>
          <h2 className="font-roboto text-2xl tracking-tight mt-1">{bookname}</h2>
          <p className="font-roboto-300 text-blue-700 text-sm">{author}</p>
        </div>
        <div className="mt-2">
          <button type="button" className="font-roboto-300 text-blue-600 text-sm">
            Comments
          </button>
          <span className="mx-4 text-xl font-thin text-gray-300">|</span>
          <button
            type="button"
            className="font-roboto-300 text-blue-600 text-sm"
            onClick={() => {
              dispatch(deleteBook(id));
            }}
          >
            Remove
          </button>
          <span className="mx-4 text-xl font-thin text-gray-300">|</span>
          <button type="button" className="font-roboto-300 text-blue-600 text-sm">
            Edit
          </button>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex justify-center items-center py-6 px-6">
          <div className="percentage" />
        </div>
        <div>
          <p className="font-montserrat-400 text-3xl">67%</p>
          <p className="font-montserrat-400 opacity-50 text-sm">Completed</p>
        </div>
        <div className="w-0025 h-20 bg-gray-200 ml-14 mr-10" />
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-roboto-300 tracking-wider text-black opacity-50">CURRENT CHAPTER</p>
            <p className="font-roboto-300 mt-1 text-black tracking-tight text-base">Introduction</p>
          </div>
          <button
            type="button"
            className="w-48 h-10 rounded-md text-sm p-2 font-roboto-300 text-white bg-blue-500"
          >
            UPDATE PROGRESS
          </button>
        </div>
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
