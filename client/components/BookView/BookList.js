import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const BookList = ({ books, deleteBook, readBook }) => {
  if (!books) return null

  const handleDelete = (book) => () => {
    if (confirm('Are you sure you want to delete this book')) {
      deleteBook(book)
    }
  }

  const handleRead = (book) => () => {
    readBook(book)
  }

  return (
    <div className="mt-4">
      <h4>Your books</h4>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span className="m-2"><Link to={`/book/${book.id}`}>{book.title}</Link> by <em>{book.author}</em> - times read: {book.times_read}</span>
            <Button variant="success" className="m-2" onClick={handleRead(book)}>Read</Button>
            <Button variant="danger" className="m-2" onClick={handleDelete(book)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
