import React, { useState, useEffect } from 'react'
import {
  getBooks, postBook, deleteBook, readBook,
} from 'Utilities/services/books'

import BookList from 'Components/BookView/BookList'
import BookForm from 'Components/BookView/BookForm'
import Notification from 'Components/Notification'

const BookView = () => {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

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

    setMessage('Book deleted')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleReadBook = async (book) => {
    await readBook(book)
    handleGetBooks(user.id)
  }

  return (
    <div className="container">
      <h1 className="border-bottom">Books</h1>
      <BookForm postBook={handlePostBook} />
      <BookList books={books} deleteBook={handleDeleteBook} readBook={handleReadBook} />
      <Notification message={message} type={'error'} />
    </div>
  )
}
export default BookView
