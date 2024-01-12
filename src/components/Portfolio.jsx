import React, {useEffect} from 'react'
import Bookkeeping from '../assets/Ez_bookkeeping.mp4';
import Flashbot from '../assets/Flashbot.webm';
import './Portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';


export const Portfolio = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000, // You can also add other settings. This one controls animation duration.
        });
      }, []);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <Container>

        <div className="section-title my-5">
          <h2 className='portfolioHeader'>Portfolio</h2>
          <p className='portfolioTitle'>Here you can see my most recent projects I've completed. Feel free to try the demo or visit the github repository associated to that project.</p>
        </div>

        <Row className="portfolio-container h-100 flex-column-reverse flex-md-row" data-aos="fade-up" data-aos-delay="100">

        <Col className="h-100 projectCard order-2 order-md-1">
            <div className="portfolio-wrap mb-3 h-100">
                <video src={Bookkeeping} className="img-fluid video rounded-top" alt="" controls loop />
                <div className="portfolio-links">
                    <Card.Title><strong>Ez Bookkeeping</strong></Card.Title>
                    <Card.Text>A bookkeeping service for small organizations. Keeping track in an organized fashion of all your daily financial investments for your business.</Card.Text>
                    <Button href="https://github.com/LilOTechGod/Ez-Bookkeeping" className="w-50 portfolioBtn rounded-0"><i className="bx bx-link"></i>View GitHub</Button>
                    <Button href="https://ez-bookkeeping-57eaced69b66.herokuapp.com/" className='w-50 portfolioBtn rounded-0'><i className="bx bx-world"></i>Go to Site</Button>
                </div>
            </div>
        </Col>

          <Col className='h-100 projectCard order-1 order-md-2'>
            <div className="portfolio-wrap mb-3 h-100">
            <video src={Flashbot} className="img-fluid video rounded-top" alt="" controls loop />
              <div className="portfolio-links">
                <Card.Title><strong>Flash Bot</strong></Card.Title>
                <Card.Text>Never miss out on your favorite product again! Flash bot is an e-commerce store for purchasing a self checkout bot.</Card.Text>
                <Button href="https://github.com/LilOTechGod/Flash-Bot" className="w-50 portfolioBtn rounded-0"><i className="bx bx-link"></i>View GitHub</Button>
                <Button href="" className='w-50 portfolioBtn rounded-0 disabled'><i className="bx bx-world"></i>Go to Site</Button>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}
