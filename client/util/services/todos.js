import axios from 'axios'

const basePath = '/api/todos'

export const getTodos = async () => {
  const response = await axios.get(basePath)
  return response.data
}

export const postTodo = async (todo) => {
  const response = await axios.post(basePath, { todo })
  return response.data
}

export const deleteTodo = async (todo) => {
  const response = await axios.delete(`${basePath}/${todo.id}`)
  return response.data
}

export const checkTodo = async (todo) => {
  const response = await axios.get(`${basePath}/${todo.id}/check`)
  return response.data
}
