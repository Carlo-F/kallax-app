const { ApplicationError } = require('@util/customErrors')

let todos = []
let simpleId = 0

const getAll = async (req, res) => {
  res.send(todos)
}

const create = async (req, res) => {
  simpleId += 1
  const { todo } = req.body
  if (!todo) throw new ApplicationError('Todo is required', 400)
  const newTodo = {
    id: simpleId,
    body: todo,
    check: false,
  }
  todos.push(newTodo)
  res.send(newTodo)
}

const destroy = async (req, res) => {
  todos = todos.filter((todo) => Number(todo.id) !== Number(req.params.id))
  res.sendStatus(200)
}

const check = async (req, res) => {
  // eslint-disable-next-line arrow-body-style
  todos = todos.map((item) => {
    return (Number(item.id) === Number(req.params.id)) ? { ...item, check: !item.check } : item
  })
  res.sendStatus(200)
}

module.exports = {
  getAll,
  create,
  destroy,
  check,
}
