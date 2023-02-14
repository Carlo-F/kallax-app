import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'

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
    <div className="m-2 mt-4">
      <h4>Your books</h4>
      <Row xs={1} md={2} className="g-4">
        {books.map((book) => (
          <Col>
            <Card key={book.id}>
              <Card.Body>
                <Card.Title><Link to={`/book/${book.id}`}>{book.title}</Link> <span><small>(times read: {book.times_read})</small></span></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">by {book.author}</Card.Subtitle>
                <Card.Text>
                  {book.plot.substring(0,50)+"..."}
                </Card.Text>
                <hr />
                <Button variant="outline-success" className="m-2" onClick={handleRead(book)}>Mark as read</Button>
                <Button variant="outline-danger" className="m-2" onClick={handleDelete(book)}>Delete book</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BookList
