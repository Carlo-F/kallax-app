import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const BookForm = ({ postBook }) => {
  const [book, setBook] = useState('')

  const handleSubmit = () => {
    postBook(book)
  }

  const handleChange = ({ target }) => setBook(target.value)

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter book</Form.Label>
        <Form.Control type="text" placeholder="es. shopping" value={book} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}

export default BookForm
