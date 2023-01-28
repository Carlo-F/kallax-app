import React from 'react'
import { Button } from 'react-bootstrap'

const TodoList = ({ todos, deleteTodo, checkTodo }) => {
  if (!todos) return null

  const handleDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const handleCheck = (todo) => () => {
    checkTodo(todo)
  }

  return (
    <div className="mt-4">
      <h4>Your todos</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.check ? 'checked' : ''} onClick={handleCheck(todo)} />
            <span className="m-2">{todo.body}</span>
            <Button variant="danger" onClick={handleDelete(todo)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
