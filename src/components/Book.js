import React from 'react'
import './styles/book.css'

const Book = ({ bookname, author }) => {
  return (
    <div className="book-container">
      <div className="description">
        <div>
            <span>Action</span>
            <h2>{bookname}</h2>
            <span>{author}</span>
        </div>
        <div>
            <button className="button-remove">Remove</button>
        </div>
      </div>
      <div className="progress section">
        <button className="button-progress">Update Progress</button>
      </div>
    </div>
  )
}

export default Book
