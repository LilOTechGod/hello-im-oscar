import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import video from '../assets/video.webm';
import './Hero.css';
import Ratio from 'react-bootstrap/Ratio';
import TypeWriter from './TypeWriter';

export default function Hero() {

    return (
      <div>
        <Row className='w-100 mb-5'>
          <Col className='typewriterComponent '>
            <TypeWriter />  
          </Col>
          <Col className='video p-0'>
            <div style={{ width: '100%', height: 'auto' }}>
              <Ratio aspectRatio="16x9"> 
                <iframe src={video} frameborder="0" allowFullScreen></iframe>
              </Ratio>
            </div>
          </Col>
        </Row>
      </div>
    );
  }