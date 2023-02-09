import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

const BookForm = ({ book, updateBook, changeBook }) => {


  const handleSubmit = (event) => {
    event.preventDefault()
    updateBook()
  }

  useEffect(() => {
    console.log(book)
  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    changeBook(event.target)
  }

  return (
    <div className="m-2">
      <h4>Update your book</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Book title</Form.Label>
          <Form.Control type="text" placeholder="es. The Bible" value={book.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Enter book author</Form.Label>
          <Form.Control type="text" placeholder="es. God" value={book.author} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="isbn_code">
          <Form.Label>Enter isbn_code</Form.Label>
          <Form.Control type="text" placeholder="0000-000-00-000" value={book.isbn_code} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="plot">
          <Form.Label>Enter book plot</Form.Label>
          <Form.Control as="textarea" rows={3} value={book.plot} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="times_read">
          <Form.Label>Enter how many times have you read this book</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0} value={book.times_read} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  )
}

export default BookForm
