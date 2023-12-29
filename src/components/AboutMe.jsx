import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './AboutMe.css'
import headShot from '../assets/Professional-Headshot.jpg';
import AOS from 'aos';
import React, {useEffect} from 'react'
import 'aos/dist/aos.css';

function AboutMe() {

    useEffect(() => {
        AOS.init({
          duration: 2000, // You can also add other settings. This one controls animation duration.
        });
      }, []);

  return (
    <Container>
      <Row>
        <div className="section-title">
          <h2 className="aboutMeHeader">About</h2>
          <p className="fontColor">As a dedicated software engineer based in the innovative tech hub of Austin, Texas. With a solid foundation in full-stack development, I thrive on building projects from inception to deployment. My journey into the world of technology was ignited by curiosity and a desire to understand the transformative power of software. From being an end user to now crafting unique experiences as an end creator, I’ve acquired strengths in creativity, teamwork, and effective communication. These skills, combined with my ability to work in a fast-paced and diverse team environment, allow me to develop solutions that consistently exceed expectations.</p>
        </div>

        <Row className="fontColor">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Software Engineer &amp; Tech Support.</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>512-659-6322</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Austin, TX USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Certificates:</strong> <span>2 </span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>perezoscar360@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Open To:</strong> <span>Freelance/Contract Projects</span></li>
                </ul>
              </div>
            </div>
            <p>
            My journey hasn’t been all documentation and formal training. I’ve learned a ton from my past roles.  As a Lead Selector at US Foods, I enriched my problem-solving abilities and strategic thinking. Guiding a team of six, I not only increased production rates but also fostered a culture of collaboration and efficiency. Then there was my time as a Drywall Journeyman—a hands-on gig that taught me the ropes. I fine-tuned operations, ensuring everything flowed smoothly, and customer satisfaction was top-notch. These diverse experiences have coalesced, molding me into a holistic problem solver who thrives under pressure and relentlessly pursues excellence.
            </p>
          </div>
          <div className="col-lg-4" data-aos="fade-right">
            <img src={headShot} className="img-fluid headShot" alt=""/>
          </div>
        </Row>
      </Row>
    </Container>
  );
}

export default AboutMe;
