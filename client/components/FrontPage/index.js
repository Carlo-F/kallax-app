import React, { useState, useEffect } from 'react'
import { getUsers } from 'Utilities/services/users'
import { Button } from 'react-bootstrap'

const FrontPage = () => {
  const [users, setUsers] = useState([])
  const [userEmail, setUserEmail] = useState([])
  const [user, setUser] = useState(null)

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

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const selectedUser = await users.find(user => user.email === userEmail)

      if (!selectedUser) {
        throw 'User not found'
      }
      window.localStorage.setItem(
        'loggedKallaxUser', JSON.stringify(selectedUser)
      )
      setUser(selectedUser)
      setUserEmail('')
    } catch (exception) {
      console.log(exception)
      // setErrorMessage('Wrong credentials')
      // setTimeout(() => {
      //   setErrorMessage(null)
      // }, 5000)
    }
  }

  const handleLogout = async () => {
    window.localStorage.removeItem('loggedKallaxUser')
    window.location.reload(true)
  }
  
  return (
    <div className="container">
      <h1>KALLAX Homepage</h1>
      <h5>My personal swedish bookshelf</h5>
      {user === null && (
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type="text"
              value={userEmail}
              name="UserEmail"
              onChange={({ target }) => setUserEmail(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      )}
      { user !== null && (
      <p>
          Hi {user.first_name}, 
          <a href="/books">Check your Books</a> or
          <Button variant="link" onClick={handleLogout}>Logout</Button>
        </p>
      )}
    </div>
  )
}

export default FrontPage
