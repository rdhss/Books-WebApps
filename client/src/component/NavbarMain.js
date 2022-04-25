import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const NavbarMain = () => {
  const [form, setForm] = useState('')
  const nav = useNavigate()

 const handleSubmit = (e) =>{
   e.preventDefault()
   nav(`/search/${form}`)
 }

 const handleChange = (e) =>{
   setForm(e.target.value)
 }

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Books Webapp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/bookmark">Booksmark</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Happiness&Mindfulness">Happiness & Mindfulness</NavDropdown.Item>
              <NavDropdown.Item href="/Career&Business">Career & Business</NavDropdown.Item>
              <NavDropdown.Item href="/Society&Politics">Society & Politics</NavDropdown.Item>
              <NavDropdown.Item href="/Investment&Finance4">Investment & Finance</NavDropdown.Item>
              <NavDropdown.Item href="/Productivity&TimeManagement">
              Productivity & Time Management
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search Title/Authors"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success" onClick={() => nav(`/search/${form}`)}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMain