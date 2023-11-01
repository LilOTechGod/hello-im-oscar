import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import video from '../assets/video.webm';
import './Hero.css';

export default function Hero() {

    return (
      <div>
        <Row>
          <Col sm={6}className='video'>
            <video width='100%' height='' controls className='video'>
                <source src={video} type='video/webm'></source>
            </video>
          </Col>
          <Col sm={6} className='bg-danger'>
            sm=4
          </Col>
        </Row>
        <div className='container heroDivider'>

        </div>
      </div>
    );
  }