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
        <Col sm={6} className='bg-danger'>Passionate and solutions-driven full stack web developer. To provide unique perspectives on how end-users interact with websites and software platforms is the goal. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution. Experience in utilizing a combination of strong communication, collaboration, and analytical skills. Strong ability to design, build, and maintain websites from conception to production. Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.</Col>
    </Row>
    </Container>
  );
}

export default AboutMe;