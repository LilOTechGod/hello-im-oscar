import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <Navbar className='headerColor'>
        <Container>
          <Navbar.Brand className='brandColor' href="#home">Hi There! Welcome to my portfolio</Navbar.Brand>
          <Nav className="">
            <Nav.Link className='linkColor' href="#home">Home</Nav.Link>
            <Nav.Link className='linkColor' href="#features">Portfolios</Nav.Link>
            <Nav.Link className='linkColor' href="#pricing">Education/Experience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )}

  export default Header;