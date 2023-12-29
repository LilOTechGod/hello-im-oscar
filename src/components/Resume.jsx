import React, {useEffect} from "react";
import "./Resume.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Resume = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // You can also add other settings. This one controls animation duration.
    });
  }, []);

  return (
    <section id="resume" class="resume pb-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#C0A080"
          fill-opacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,165.3C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <div class="section-title">
          <h2 className="resumeHeader">Resume</h2>
          <p className="resumeText">Below you will see a bit of my past experience along with my achievements. If you want to see my complete resume, click on the see more button and you will be taken to my full resume.</p>
        </div>

        <Row>
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h5>Oscar Perez-Hernandez</h5>
              <p>
                <em>
                  Innovative and deadline-driven software engineer and tech
                  support with 1.5+ years of experience designing and developing
                  from initial concept to final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>Austin, TX</li>
                <li>(512) 659-6322</li>
                <li>perezoscar360@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education and Training</h3>
            <div class="resume-item">
              <h5>Software Engineering Fellowship</h5>
              <h5 className="timeFrame">2023 - 2023</h5>
              <p>
                <em>Hackbright Academy, San Francisco, CA</em>
              </p>
              <p>
                An accelerated Perficient sponsored program where only qualified
                candidates participated in a software engineering fellowship. In
                return students were properly trained with industry ready skills
                to be successful in the tech industry.
              </p>
            </div>
            <div class="resume-item">
              <h5>Full Stack Web Development Bootcamp</h5>
              <h5 className="timeFrame">2022 - 2022</h5>
              <p>
                <em>University of Texas at Austin, Austin TX</em>
              </p>
              <p>
                A beginner to expert level course that covered the fundamentals
                of web development. The course covered HTML, CSS, JavaScript,
                Node.js, React, and much more like frameworks, libraries,
                extensions and industry tools along with best practices.
              </p>
            </div>
                <div class="d-flex justify-content-center">
                    <Button href="#" className="mt-5 w-25 btn-color">See More</Button>
                </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h5>Web Developer</h5>
              <h5 className="timeFramePresent">2023 - Present</h5>
              <p>
                <em>House Trevethan A Technology Studio, Tucson, AZ</em>
              </p>
              <ul>
                <li>
                  Execute Development and Configuration Tasks: I take pride in
                  skillfully handling assigned development and configuration
                  tickets, leveraging essential programming languages such as
                  JavaScript, WordPress, and some PHP.
                </li>
                <li>
                  Strategic Relationship Building and Project Consultation: In a
                  regular work week, 15% of the time I’m fostering team
                  relationships, ensuring alignment, and creating a robust
                  feedback loop. Consistently consult with the team on ongoing
                  projects and tickets, guiding them from concept to successful
                  completion. Weekly client deliveries are a priority.{" "}
                </li>
                <li>
                  Client Engagement and Solution Exploration: I enjoy engaging
                  with clients proactively, discussing the realm of
                  possibilities within budgetary constraints, resource
                  availability, and project deadlines. It's always exciting to
                  explore solutions that meet their needs.
                </li>
                <li>
                  Continuous Learning and Software Optimization: I regularly
                  delve into documentation for new plugins and frameworks. I
                  strive to familiarize myself with the software landscape to
                  maximize its potential, contributing innovative solutions or
                  alternative approaches to the team.
                </li>
                <li>
                  Mentorship and Training: Drawing from my own journey as a
                  developer, I utilize my technical expertise to train upcoming
                  developers, fostering a culture of continuous learning and
                  skill enhancement within the team.
                </li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Perficient Student Engineer fellowship </h5>
              <h5 className="timeFrame">2023 - 2023</h5>
              <p>
                <em>Hackbright Academy, San Francisco, CA</em>
              </p>
              <ul>
                <li>
                  Comprehensive Fullstack Software Engineering Program:
                  Successfully completed an accelerated fullstack software
                  engineering program sponsored by Perficient. This intensive
                  training not only equipped me with technical skills but also
                  instilled industry best practices, ensuring that I approach
                  development with a professional mindset.
                </li>
                <li>
                  Comprehensive Skill Development: Acquired proficiency in
                  fundamental areas such as data structures, algorithms,
                  testing, front-end, back-end, and database programming.
                  Leveraged technologies including JavaScript, HTML, Bootstrap,
                  and ReactJS.
                </li>
                <li>
                  Effective Collaboration and Communication: Collaborated on
                  pair-programming assignments with cohort colleagues, honing
                  daily communication skills. This experience prepared me to
                  effectively consult with clients.
                </li>
                <li>
                  Holistic Skill Development and Collaborative Projects:
                  Effective Communication: Collaborated on pair-programming
                  assignments with cohort colleagues, honing daily communication
                  skills essential for client consultations. Team and Capstone
                  Projects: Engaged in collaborative team projects and capstone
                  initiatives, applying theoretical knowledge to real-world
                  scenarios.
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
