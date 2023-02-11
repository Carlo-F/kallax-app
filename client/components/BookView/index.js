import React, { useState, useEffect } from 'react'
import {
  getBooks, postBook, deleteBook, readBook,
} from 'Utilities/services/books'

import BookList from 'Components/BookView/BookList'
import BookForm from 'Components/BookView/BookForm'

const BookView = () => {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState(null)

  const handleGetBooks = async (userId) => {
    const newBooks = await getBooks()
    const userBooks = newBooks.filter(book => book.user_id === userId)
    setBooks(userBooks)
  }

  useEffect(() => {
    const loggedKallaxJSON = window.localStorage.getItem('loggedKallaxUser')
    if (loggedKallaxJSON) {
      const user = JSON.parse(loggedKallaxJSON)
      setUser(user)
      handleGetBooks(user.id)
    }
  }, [])

  const handlePostBook = async (newBook) => {
    await postBook({ userId: user.id, ...newBook })
    handleGetBooks(user.id)
  }

  const handleDeleteBook = async (book) => {
    await deleteBook(book)
    handleGetBooks(user.id)
  }

  const handleReadBook = async (book) => {
    await readBook(book)
    handleGetBooks(user.id)
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
