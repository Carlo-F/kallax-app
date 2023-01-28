import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const TodoForm = ({ postTodo }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = () => {
    postTodo(todo)
  }

  const handleChange = ({ target }) => setTodo(target.value)

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter todo</Form.Label>
        <Form.Control type="text" placeholder="es. shopping" value={todo} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}

export default TodoForm
