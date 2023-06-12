import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './styles/addNewBook.css';
import ButtonAdd from './ButtonAdd';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', author: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title: formData.name,
      author: formData.author,
      category: 'Adventure',
    };
    dispatch(addBook(book));
    setFormData({ name: '', author: '' });
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="addnew-container">
      <h2>Add a New Book</h2>
      <form onSubmit={addNewBook}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          name="author"
          onChange={handleChange}
          required
        />
        <ButtonAdd />
      </form>
    </div>
  );
};

export default AddNewBook;
