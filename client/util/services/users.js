import axios from 'axios'

const basePath = '/api/users'

export const getUsers = async () => {
  const response = await axios.get(basePath)
  return response.data
}

export const getUser = async (id) => {
  const response = await axios.get(`${basePath}/${id}`)
  return response.data
}