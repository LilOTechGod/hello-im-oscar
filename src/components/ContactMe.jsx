import React, { useEffect } from "react";
import "./ContactMe.css";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "emailjs-com";

export const ContactMe = () => {
  // State of from before and after validation
  const [validated, setValidated] = useState(false);
  //  this function is used to check if all fields on the form have been filled out. If not, it will not allow the user to submit the form. If so then send to my email.
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      emailjs.sendForm('service_xf5sggr', "template_8sk8yfc", form, "E1qXcK8t9ZihRVW5a")
        .then(
          (result) => {
            console.log(result.text);
            window.alert("Thanks for reaching out! I will contact you shortly.");
            form.reset();
            setValidated(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setValidated(true);
  };

  // this hook is used for the animations coming from AOS
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can also add other settings. This one controls animation duration.
    });
  }, []);

  // this function is used to send the email to the email address provided in the emailjs.com dashboard

  return (
    <section id="contact" className="my-5">
      <Container>
        <div className="mb-5">
          <h2 className="contact-title">Contact</h2>
        </div>

        <Row data-aos="fade-up" data-aos-delay="100">
          <Col sm={5} className="border-padding">
            <div className="content-background d-flex flex-column">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt me-3 contactIcon"></i>
                <div>
                  <h4>Based In:</h4>
                  <p>Austin, TX (512)</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-envelope me-3 contactIcon"></i>
                <div>
                  <h4>Email:</h4>
                  <p>perezoscar360@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-phone me-3 contactIcon"></i>
                <div>
                  <h4>Call:</h4>
                  <p>(512)659-6322</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440897.58384108066!2d-98.08540360979079!3d30.307940641106438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1704319507410!5m2!1sen!2sus"
                width="100%"
                height="208"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          <Col sm={7} className="border-padding">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="content-background"
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Oscar Perez"
                    className="contact-input"
                    name="user_name"
                  />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="perezoscar360@gmail.com"
                    className="contact-input"
                    name="user_email"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="subject"
                    required
                    className="contact-input"
                    name="user_subject"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    placeholder="Your message"
                    required
                    type="text"
                    className="contact-input"
                    name="user_message"
                  />
                </Form.Group>
              </Row>

              <div className="d-flex flex-column justify-content-center align-items-center">
                <Button type="submit" className="contactBtn">
                   Contact Me!
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
