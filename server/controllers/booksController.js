const { ApplicationError } = require('@util/customErrors')
const connection = require('@util/database')

let userId = '1'

const getAll = async (req, res) => {
  const sql = `SELECT id, title, author, isbn_code, created_at, plot, times_read FROM books WHERE user_id=${userId} AND deleted_at IS NULL`

  connection.query(sql, function (err, result, fields) {
    if (err) {
        throw new ApplicationError(`error: ${err.message}`, 400)
    }
    res.send(result)
  });

}

const create = async (req, res) => {
  const { book } = req.body

  if (!book) throw new ApplicationError('book is required', 400)

  const sql = `
    INSERT INTO books (user_id, title, author, isbn_code, plot, times_read) 
    VALUES (${userId},'${book.title}','${book.author}','${book.isbn_code}','${book.plot}',${book.times_read ?? 0})
  `

  connection.query(sql, function (err, result, fields) {
      if (err) {
          throw new ApplicationError(`error: ${err.message}`, 400)
      }
    res.sendStatus(200)
  });

}

const destroy = async (req, res) => {
    const sql = `
    UPDATE books SET deleted_at=now() 
    WHERE id=${req.params.id} AND user_id=${userId}
  `

  connection.query(sql, function (err, result, fields) {
      if (err) {
          throw new ApplicationError(`error: ${err.message}`, 400)
      }
    res.sendStatus(200)
  });
}

const read = async (req, res) => {

  const sql = `UPDATE books SET times_read = times_read + 1 WHERE id=${req.params.id} AND user_id=${userId}`

  connection.query(sql, function (err, result, fields) {
    if (err) {
        throw new ApplicationError(`error: ${err.message}`, 400)
    }

    res.sendStatus(200)

  });
  

}

module.exports = {
  getAll,
  create,
  destroy,
  read,
}
