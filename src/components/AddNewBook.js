import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';
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
    dispatch(postBooks(book));
    setFormData({ name: '', author: '' });
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-10/12 m-auto pb-40">
      <div className="h-0050 bg-gray-200 h-1 w-full" />
      <h2 className="mt-6 font-montserrat-700 font-bold text-xl tracking-tight text-gray-400">ADD NEW BOOK</h2>
      <form onSubmit={addNewBook} className="flex gap-8 mt-4">
        <input
          type="text"
          placeholder="Book title"
          value={formData.name}
          name="name"
          onChange={handleChange}
          className="border w-415 border-solid rounded-md pl-5 py-2 placeholder-slate-300 font-montserrat-400"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          name="author"
          onChange={handleChange}
          className="border w-64 border-solid rounded-md pl-5 py-2 placeholder-slate-300 font-montserrat-400"
          required
        />
        <ButtonAdd />
      </form>
    </div>
  );
};

export default AddNewBook;
