import React from 'react'
import './styles/book.css'

const Book = () => {
  return (
    <div className="book-container">
      <div className="description">
        <div>
            <span>Action</span>
            <h2>The Hunger Games</h2>
            <span>Suzanne Colins</span>
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
