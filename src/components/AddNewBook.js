import React from 'react';
import './styles/addNewBook.css';

const AddNewBook = () => (
  <div className="addnew-container">
    <h2>Add a New Book</h2>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Author" required />
      <button type="button" className="button-addBook">ADD BOOK</button>
    </form>
  </div>
);

export default AddNewBook;
