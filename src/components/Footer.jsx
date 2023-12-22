import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Container>
        <Row>
          <Col sm={6}>
            <Card.Title>OPH Resume</Card.Title>
            <Card.Text>
              After reviewing my resume, I hope you will agree that I am the
              type of competent and competitive candidate you are looking for. I
              look forward to elaborating on how my specific skills and
              abilities will benefit your organization.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Contact me
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          <Col sm={6}>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default Footer;
