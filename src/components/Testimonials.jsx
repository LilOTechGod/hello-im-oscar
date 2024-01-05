import React, {useEffect} from "react";
import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import Katryna from "../assets/Katryna.png";
import Dj from "../assets/DJ.png";
import { Container } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonials() {

    useEffect(() => {
        AOS.init({
          duration: 2000, // You can also add other settings. This one controls animation duration.
        });
      }, []);

  return (
    <section className="testimonialCarousel">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#C0A080"
          fill-opacity="1"
          d="M0,256L1440,96L1440,0L0,0Z"
        ></path>
      </svg>

      <Container id="testimonials">
        <div>
          <h2 className="testimonial-title">Testimonials</h2>
          <p className="testimonial-subtext">
            Check out what others have to say about me!
          </p>
        </div>

        <Carousel controls={false} className=" d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
          <Carousel.Item className="insideCarousel">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={Katryna} className="testimonialImg" />
              <h5 className="testimonial-subtext">
                <strong>Katryna Yaworski</strong>
              </h5>
              <h5 className="testimonialSubText">
                Full-Stack Software Engineer
              </h5>
              <p className="testimonialPara">
                <span className="quotes">"</span>I'm thrilled to recommend
                Oscar, his journey at Hackbright was like watching a coder
                unfold their wings. Oscar's curiosity is like a compass; he's
                not afraid to ask questions and dive into the intricate details.
                His fearless approach to speaking up not only shows his thirst
                for understanding but also turns our learning sessions into
                engaging conversations. It's the kind of vibe that elevates the
                whole cohort. Oscar is also very strong technically. Navigating
                through the labyrinth of coding concepts seems second nature to
                him. His projects not only showcase technical finesse but also a
                creative flair for problem-solving. In a nutshell, Oscar's mix
                of strong communication skills, and solid technical knowledge
                make him an exceptional fit for any software development team. I
                have no doubt that he'll not just contribute but elevate the
                collaborative spirit and innovation of your team!
                <span className="quotes">"</span>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="insideCarousel">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={Dj} className="testimonialImg" />
              <h5 className="testimonial-subtext">
                <strong>Dhananjoy Tiwari</strong>
              </h5>
              <h5 className="testimonialSubText">
                Full-Stack Developer Instructor
              </h5>
              <p className="testimonialPara">
                <span className="quotes">"</span>I am delighted to recommend
                Oscar as an outstanding Full Stack Developer, with a strong
                emphasis on JavaScript. Oscar's proficiency in JavaScript is
                exceptional, and he consistently brings a creative and strategic
                approach to our development projects. His ability to seamlessly
                integrate front-end and back-end technologies has significantly
                contributed to the success of our team. Beyond his technical
                skills, Oscar is a collaborative team member, always willing to
                share his knowledge and insights. His dedication to staying
                current with the latest trends and best practices in JavaScript
                makes him a valuable asset to any project. I have had the
                privilege of working closely with Oscar and can attest to his
                commitment to delivering high-quality solutions. He would be an
                excellent choice for any team seeking a Full Stack Developer
                with a focus on JavaScript. Feel free to contact me if you have
                any questions or need further details about Oscar's
                contributions.<span className="quotes">"</span>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}
