import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './styles/addNewBook.css';
import ButtonAdd from './ButtonAdd';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title: name,
      author,
      category: 'Adventure',
    };
    dispatch(addBook(book));
    setName('');
    setAuthor('');
  };

  return (
    <div className="addnew-container">
      <h2>Add a New Book</h2>
      <form onSubmit={addNewBook}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
        <ButtonAdd />
      </form>
    </div>
  );
};

export default AddNewBook;
