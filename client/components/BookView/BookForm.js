import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const BookForm = ({ postBook }) => {
  const [book, setBook] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    postBook(book)
  }

  const handleChange = ({ target }) => setBook({ ...book, [target.id]: target.value })

  return (
    <div className="m-2">
      <h4>Add a book</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Enter book title</Form.Label>
          <Form.Control type="text" placeholder="es. The Bible" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Enter book author</Form.Label>
          <Form.Control type="text" placeholder="es. God" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="isbn_code">
          <Form.Label>Enter isbn_code</Form.Label>
          <Form.Control type="text" placeholder="0000-000-00-000" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="plot">
          <Form.Label>Enter book plot</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="times_read">
          <Form.Label>Enter how many times have you read this book</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  )
}

export default BookForm
