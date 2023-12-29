import React from "react";
import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import Katryna from "../assets/Katryna.png";
import Dj from "../assets/DJ.png";

export default function Testimonials() {
  return (
    <Carousel className="testimonialCarousel d-flex align-items-center">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#C0A080"
          fill-opacity="1"
          d="M0,256L1440,96L1440,0L0,0Z"
        ></path>
      </svg> */}

      <Carousel.Item>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={Katryna} className="testimonialImg" />
          <h5>
            <strong>Katryna Yaworski</strong>
          </h5>
          <h5>Full-Stack Software Engineer</h5>
          <p className="testimonialPara">
            "I'm thrilled to recommend Oscar, his journey at Hackbright was like
            watching a coder unfold their wings. Oscar's curiosity is like a
            compass; he's not afraid to ask questions and dive into the
            intricate details. His fearless approach to speaking up not only
            shows his thirst for understanding but also turns our learning
            sessions into engaging conversations. It's the kind of vibe that
            elevates the whole cohort. Oscar is also very strong technically.
            Navigating through the labyrinth of coding concepts seems second
            nature to him. His projects not only showcase technical finesse but
            also a creative flair for problem-solving. In a nutshell, Oscar's
            mix of strong communication skills, and solid technical knowledge
            make him an exceptional fit for any software development team. I
            have no doubt that he'll not just contribute but elevate the
            collaborative spirit and innovation of your team!"
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={Dj} className="testimonialImg" />
          <h5>
            <strong>Dhananjoy Tiwari</strong>
          </h5>
          <h5>Full-Stack Developer Instructor</h5>
          <p>"I highly recommend him!"</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
