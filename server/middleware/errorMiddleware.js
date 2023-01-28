const errorHandler = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(error.message, error.name, error.extra)

  if (error.name === 'ApplicationError') {
    return res.status(error.status).send({ error: error.message })
  }

  res.status(500).send({ error: error.message })
  return next(error)
}

module.exports = errorHandler
