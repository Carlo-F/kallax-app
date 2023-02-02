import React, { useState, useEffect } from 'react'
import {
  getBooks, postBook, deleteBook, readBook,
} from 'Utilities/services/books'

import BookList from 'Components/BookView/BookList'
import BookForm from 'Components/BookView/BookForm'

const BookView = () => {
  const [books, setBooks] = useState([])

  const handleGetBooks = async () => {
    const newBooks = await getBooks()
    setBooks(newBooks)
  }

  useEffect(() => {
    handleGetBooks()
  }, [])

  const handlePostBook = async (newBook) => {
    await postBook(newBook)
    handleGetBooks()
  }

  const handleDeleteBook = async (book) => {
    await deleteBook(book)
    handleGetBooks()
  }

  const handleReadBook = async (book) => {
    await readBook(book)
    handleGetBooks()
  }

  return (
    <div className="container">
      <h1>Book List</h1>
      <BookForm postBook={handlePostBook} />
      <BookList books={books} deleteBook={handleDeleteBook} readBook={handleReadBook} />
    </div>
  )
}
export default BookView
