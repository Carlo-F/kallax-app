const Router = require('express')
const books = require('@controllers/booksController')

const router = Router()

router.get('/books', books.getAll)
router.post('/books', books.create)
router.delete('/books/:id', books.destroy)
router.get('/books/:id/read', books.read)

module.exports = router
