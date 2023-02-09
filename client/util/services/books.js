import axios from 'axios'

const basePath = '/api/books'

export const getBooks = async () => {
  const response = await axios.get(basePath)
  return response.data
}

export const postBook = async (book) => {
  const response = await axios.post(basePath, { book })
  return response.data
}

export const deleteBook = async (book) => {
  const response = await axios.delete(`${basePath}/${book.id}`)
  return response.data
}

export const readBook = async (book) => {
  const response = await axios.get(`${basePath}/${book.id}/read`)
  return response.data
}

export const getBook = async (id) => {
  const response = await axios.get(`${basePath}/${id}`)
  return response.data
}

export const updateBook = async (book) => {
  const response = await axios.put(`${basePath}/${book.id}/update`, {book})
  return response.data
}