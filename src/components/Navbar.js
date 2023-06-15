import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'


function Navs() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className='Navs'>
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Outlines</Nav.Link>
            <Nav.Link href="#action2">Songs</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Nav.Link href="#action2">Contact</Nav.Link>
          <Nav.Link href="#action2">Support</Nav.Link>
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;