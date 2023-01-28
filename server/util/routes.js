const Router = require('express')
const todos = require('@controllers/todosController')

const router = Router()

router.get('/todos', todos.getAll)
router.post('/todos', todos.create)
router.delete('/todos/:id', todos.destroy)
router.get('/todos/:id/check', todos.check)

module.exports = router
