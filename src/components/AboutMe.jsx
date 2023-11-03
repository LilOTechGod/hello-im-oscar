import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <Container>
        <Row>
        <Col sm={6}>
            <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    You can't complain about the paradigm you live by, when you have the ability to produce the paradigm you want to live in! {' '}
                </p>
                <footer className="blockquote-footer">
                    19 Keys <cite title="Source Title"></cite>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
        </Col>
        <Col sm={6} className='bg-danger'>sm=4</Col>
    </Row>
    </Container>
  );
}

export default AboutMe;