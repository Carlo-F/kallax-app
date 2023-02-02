const { ApplicationError } = require('@util/customErrors')
const connection = require('@util/database')

let userId = '1'
let books = []
let simpleId = 0

const getAll = async (req, res) => {
  const sql = `SELECT id, title, author, isbn_code, created_at, plot, times_read FROM books WHERE user_id=${userId} AND deleted_at IS NULL`

  connection.query(sql, function (err, result, fields) {
    if (err) {
        throw new ApplicationError(`error: ${err.message}`, 400)
    }
    books = result
  });
  res.send(books)
}

const create = async (req, res) => {
  simpleId += 1
  const { book } = req.body
  if (!book) throw new ApplicationError('book is required', 400)
  const newbook = {
    id: simpleId,
    body: book,
    check: false,
  }
  books.push(newbook)
  res.send(newbook)
}

const destroy = async (req, res) => {
  books = books.filter((book) => Number(book.id) !== Number(req.params.id))
  res.sendStatus(200)
}

const check = async (req, res) => {
  // eslint-disable-next-line arrow-body-style
  books = books.map((item) => {
    return (Number(item.id) === Number(req.params.id)) ? { ...item, check: !item.check } : item
  })
  res.sendStatus(200)
}

const read = async (req, res) => {

  const sql = `UPDATE books SET times_read = times_read + 1 WHERE user_id=${userId}`

  connection.query(sql, function (err, result, fields) {
    if (err) {
        throw new ApplicationError(`error: ${err.message}`, 400)
    }

    books = books.map((book) => {
      return (Number(book.id) === Number(req.params.id)) ? { ...book, times_read: book.times_read + 1 } : book
    })

  });
  
  res.sendStatus(200)
}

module.exports = {
  getAll,
  create,
  destroy,
  check,
  read,
}
