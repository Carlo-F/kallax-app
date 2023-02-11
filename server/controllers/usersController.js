const { ApplicationError } = require('@util/customErrors')
const connection = require('@util/database')

const getAll = async (req, res) => {
  const sql = `SELECT * FROM users`

  connection.query(sql, function (err, result, fields) {
    if (err) {
        throw new ApplicationError(`error: ${err.message}`, 400)
    }
    res.send(result)
  });

}

const getUser = async (req, res) => {
  const sql = `SELECT * FROM users WHERE id=?`

  connection.query(sql, [req.params.id], function (err, result, fields) {
    if (err) {
        throw new ApplicationError(`error: ${err.message}`, 400)
    }
    res.send(result[0])
  });

}

module.exports = {
  getAll,
  getUser,
}
