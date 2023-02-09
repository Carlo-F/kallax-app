const Router = require('express')
const books = require('@controllers/booksController')

const router = Router()

router.get('/books', books.getAll)
router.post('/books', books.create)
router.delete('/books/:id', books.destroy)
router.get('/books/:id', books.getBook)
router.get('/books/:id/read', books.read)
router.put('/books/:id/update', books.updateBook)

module.exports = router
