import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getBook, updateBook } from 'Utilities/services/books'
import BookForm from './BookForm'
import Notification from 'Components/Notification'

const SingleBook = () => {
  const [book, setBook] = useState([])
  const { id } = useParams()
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  const handleGetBook = async () => {
    const newBook = await getBook(id)
    setBook(newBook)
  }

  const handleUpdateBook = async () => {
    await updateBook(book)
    setMessage('book updated')
    setMessageType('success')
    setTimeout(() => {
      setMessage(null)
      setMessageType(null)
    }, 5000)
  }

  const handleChangeBook = ({ id, value }) => setBook({ ...book, [id]: value })

  useEffect(() => {
    handleGetBook()
  }, [])

  return (
    <div className="container">
      <BookForm book={book} updateBook={handleUpdateBook} changeBook={handleChangeBook} />
      <Notification message={message} type={messageType} />
    </div>
  )
}
export default SingleBook
