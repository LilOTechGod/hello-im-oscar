import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import headShot from '../assets/Professional-Headshot.jpg';

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="footerColor rounded-0 py-5">
      <Container>
        <Row>
          <Col sm={4}>
            <Card.Title className="footerTitle"><strong>Oscar Perez~Hernandez</strong></Card.Title>
            <Card.Text className="footerText">
              After reviewing my resume, I hope you will agree that I am the
              type of competent and competitive candidate you are looking for. I
              look forward to elaborating on how my specific skills and
              abilities will benefit your organization.
            </Card.Text>
            <Button className="footerBtn" onClick={handleShow}>
              Get In Touch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton className="offCanvasHeader">
                <Offcanvas.Title>Let's Chat</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="footerOffCanvas">
              <div className="footer-background d-flex flex-column">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt me-3 footerIcon"></i>
                <div className="contactInfo">
                  <h4>Based In:</h4>
                  <p>Austin, TX (512)</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-envelope me-3 footerIcon"></i>
                <div className="contactInfo">
                  <h4>Email:</h4>
                  <p>perezoscar360@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-phone me-3 footerIcon"></i>
                <div className="contactInfo">
                  <h4>Call:</h4>
                  <p>(512)659-6322</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <a href="https://www.linkedin.com/in/oscar-perez-hernandez/" target="_blank"><i className="bi bi-linkedin offCanvasSocialMediaIcon me-3"></i></a>
                <div className="contactInfo">
                  <h4>LinkedIn</h4>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <a href="https://github.com/LilOTechGod" target="_blank"><i className="bi bi-github offCanvasSocialMediaIcon me-3"></i></a>
                <div className="contactInfo">
                  <h4>GitHub</h4>
                </div>
              </div>
              
              <br />
              <h4>Feel free to also fill out the contact me form! 😎</h4>
            </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          <Col sm={4} className="footerColTwo">
            <Card.Img variant="top" src={headShot} style={{ width: '33%' }}/>
            <div className="d-flex flex-column align-items-center">
              <a href="https://www.linkedin.com/in/oscar-perez-hernandez/" target="_blank"><i className="bi bi-linkedin socialMediaIcon"></i></a>
              <a href="https://github.com/LilOTechGod" target="_blank"><i className="bi bi-github socialMediaIcon"></i></a>
            </div>
          </Col>

          <Col sm={4}>
            <div className="d-flex flex-row justify-content-center gap-5">
              <div className="d-flex flex-column align-items-center">
                <a href="#about" className="footerLinkColor">About</a>
                <a href="#contact" className="footerLinkColor">Contact</a>
                <a href="#" className="footerLinkColor">Home</a>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href="#portfolio" className="footerLinkColor">Portfolio</a>
                <a href="#" className="footerLinkColor">Profiles</a>
                <a href="#resume" className="footerLinkColor">Resume</a>
                <a href="#testimonials" className="footerLinkColor">Testimonials</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default Footer;
