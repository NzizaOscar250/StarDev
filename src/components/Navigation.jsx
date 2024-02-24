// import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-primary" sticky='top'>
      <Container >
        <Link to="/"  className='text-white navbar-brand'>Project Management System</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-link text-light'>Home</Link>
            <NavLink to="/projects" className='nav-link text-light'>Project</NavLink>
            <NavLink to="/projects" className='nav-link text-light'>Projects</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;