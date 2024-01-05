import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <Navbar className='headerColor'>
        <Container>
          <Navbar.Brand className='brandColor' href="#home">Welcome To My Portfolio!</Navbar.Brand>
          <Nav className="">
            <Nav.Link className='linkColor' href="#about">About</Nav.Link>
            <Nav.Link className='linkColor' href="#contact">Contact</Nav.Link>
            <Nav.Link className='linkColor' href="#home">Home</Nav.Link>
            <Nav.Link className='linkColor' href="#">Profiles</Nav.Link>
            <Nav.Link className='linkColor' href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )}

  export default Header;