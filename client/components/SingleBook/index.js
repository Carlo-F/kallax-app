import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getBook, updateBook } from 'Utilities/services/books'
import BookForm from './BookForm'

const SingleBook = () => {
  const [book, setBook] = useState([])
  const { id } = useParams()

  const handleGetBook = async () => {
    const newBook = await getBook(id)
    setBook(newBook)
  }

  const handleUpdateBook = async () => {
    await updateBook(book)
  }

  const handleChangeBook = ({ id, value }) => setBook({ ...book, [id]: value })

  useEffect(() => {
    handleGetBook()
  }, [])

  return (
    <div className="container">
      <BookForm book={book} updateBook={handleUpdateBook} changeBook={handleChangeBook} />
    </div>
  )
}
export default SingleBook
