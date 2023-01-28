import React, { useState, useEffect } from 'react'
import {
  getTodos, postTodo, deleteTodo, checkTodo,
} from 'Utilities/services/todos'

import TodoList from 'Components/TodoView/TodoList'
import TodoForm from 'Components/TodoView/TodoForm'

const TodoView = () => {
  const [todos, setTodos] = useState([])

  const handleGetTodos = async () => {
    const newTodos = await getTodos()
    setTodos(newTodos)
  }

  useEffect(() => {
    handleGetTodos()
  }, [])

  const handlePostTodo = async (newTodo) => {
    await postTodo(newTodo)
    handleGetTodos()
  }

  const handleDeleteTodo = async (todo) => {
    await deleteTodo(todo)
    handleGetTodos()
  }

  const handleCheckTodo = async (todo) => {
    await checkTodo(todo)
    handleGetTodos()
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm postTodo={handlePostTodo} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} checkTodo={handleCheckTodo} />
    </div>
  )
}
export default TodoView
