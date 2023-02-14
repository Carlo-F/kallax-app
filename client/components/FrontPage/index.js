import React, { useState, useEffect } from 'react'
import { getUsers } from 'Utilities/services/users'
import { Form, Button } from 'react-bootstrap'
import Notification from 'Components/Notification'

const FrontPage = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.email}>
        {user.first_name}
      </option>
    )
  })

  useEffect(() => {
    getUsers()
      .then(initialUsers => {
        setUsers(initialUsers)
      })
  }, [])

  useEffect(() => {
    const loggedKallaxJSON = window.localStorage.getItem('loggedKallaxUser')
    console.log(loggedKallaxJSON)
    if (loggedKallaxJSON) {
      const user = JSON.parse(loggedKallaxJSON)
      setUser(user)
    }
  }, [])

  const handleOnChange = async (event) => {

    try {
      const selectedUser = await users.find(user => user.email === event.target.value)

      if (!selectedUser) {
        throw 'User not found'
      }
      window.localStorage.setItem(
        'loggedKallaxUser', JSON.stringify(selectedUser)
      )
      setUser(selectedUser)
    } catch (exception) {
      setErrorMessage(exception)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async () => {
    window.localStorage.removeItem('loggedKallaxUser')
    window.location.reload(true)
  }
  
  return (
    <div className="container">
      <h1 className="border-bottom">Welcome to <b>KALLAX</b></h1>
      <h5>A personal swedish bookshelf</h5>
      <Notification message={errorMessage} type={'error'} />
      {user === null && (
      <div className="mt-4">
        <Form.Select aria-label="Default select example" onChange={handleOnChange}>
          <option>Seleziona utente</option>
          {userOptions}
        </Form.Select>
      </div>
      )}
      {user !== null && (
      <div className="mt-4">
        <p>
          Hi {user.first_name}! <a href="/books">Go to your bookshelf</a>
        </p>
        <p>Want to change user?
          <Button variant="link" onClick={handleLogout}>Logout</Button>
        </p>
      </div>
      )}
    </div>
  )
}

export default FrontPage
