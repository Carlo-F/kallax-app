import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { images } from 'Utilities/common'

const NavBar = () => (
  <Navbar bg="light" expand="lg" className="navbar">
    <Container>
      <Navbar.Brand href="#home">
        <img src={images.proFarmerLogo} width="100" alt="proFarmer" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/todo">Todos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavBar
