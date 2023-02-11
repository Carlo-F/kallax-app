import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { images } from 'Utilities/common'

const NavBar = () => {

  const handleLogout = async () => {
    window.localStorage.removeItem('loggedKallaxUser')
    window.location.reload(true)
  }

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={images.proFarmerLogo} width="100" alt="proFarmer" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {localStorage.getItem('loggedKallaxUser') && (
              <Nav.Link href="/books">Books</Nav.Link>
            )}
          </Nav>
          {localStorage.getItem('loggedKallaxUser') && (
            <Button variant="link" className="ml-auto" onClick={handleLogout}>Logout</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
