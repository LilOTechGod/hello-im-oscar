import React, { useEffect } from "react";
import "./Resume.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can also add other settings. This one controls animation duration.
    });
  }, []);

  return (
    <section className="resume pb-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#C0A080"
          fill-opacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,165.3C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Container id="resume">
        <div className="section-title">
          <h2 className="resumeHeader">Resume</h2>
          <p className="resumeText">
            Below you will see a bit of my past experience along with my
            achievements.
          </p>
        </div>

        <Row>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h5>Oscar Perez-Hernandez</h5>
              <p>
                <em>
                  Innovative and deadline-driven software engineer and tech
                  support with 1.5+ years of experience designing and developing
                  from initial concept to final, polished deliverable.
                </em>
              </p>
              <ul className="bulletPoints">
                <li>Austin, TX</li>
                <li>(512) 659-6322</li>
                <li>perezoscar360@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education and Training</h3>
            <div className="resume-item">
              <h5>Software Engineering Fellowship</h5>
              <h5 className="timeFrame">2023 - 2023</h5>
              <p>
                <em>Hackbright Academy, San Francisco, CA</em>
              </p>
              <p className="bulletPoints">
                An accelerated Perficient sponsored program where only qualified
                candidates participated in a software engineering fellowship. In
                return students were properly trained with industry ready skills
                to be successful in the tech industry.
              </p>
            </div>
            <div className="resume-item">
              <h5>Full Stack Web Development Bootcamp</h5>
              <h5 className="timeFrame">2022 - 2022</h5>
              <p>
                <em>University of Texas at Austin, Austin TX</em>
              </p>
              <p className="bulletPoints">
                A beginner to expert level course that covered the fundamentals
                of web development. The course covered HTML, CSS, JavaScript,
                Node.js, React, and much more like frameworks, libraries,
                extensions and industry tools along with best practices.
              </p>
            </div>

            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h5>Web Developer</h5>
              <h5 className="timeFramePresent">2023 - Present</h5>
              <p>
                <em>House Trevethan A Technology Studio, Tucson, AZ</em>
              </p>
              <ul className="bulletPoints">
                <li>
                  <em className="mainPoint">
                    Execute Development and Configuration Tasks:
                  </em>{" "}
                  I take pride in skillfully handling assigned development and
                  configuration tickets, leveraging essential programming
                  languages such as JavaScript, WordPress, and some PHP.
                </li>
                <li>
                  <em className="mainPoint">
                    Strategic Relationship Building and Project Consultation:
                  </em>{" "}
                  In a regular work week, 10% of the time I’m fostering a
                  relationship with my team, ensuring alignment, creating a
                  robust feedback loop, consulting about ongoing projects and
                  tickets to guide them from concept to completion.{" "}
                </li>
                <li>
                  <em className="mainPoint">
                    Client Engagement and Solution Exploration:
                  </em>{" "}
                  I enjoy engaging with clients proactively, discussing the
                  realm of possibilities within their budget, resource
                  availability, and project deadlines. It's always exciting to
                  explore solutions that meet their needs.
                </li>
                <li>
                  <em className="mainPoint">
                    Continuous Learning and Software Optimization:
                  </em>{" "}
                  I often dive into the nitty-gritty of documentation. This
                  helps me understand the ins and outs of the tools I'm using,
                  allowing me to apply the most effective logic to my work. It's
                  all about finding the best approach to get the job done
                  right."
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="resume-item">
              <h5>Perficient Student Engineer fellowship </h5>
              <h5 className="timeFrame">2023 - 2023</h5>
              <p>
                <em>Hackbright Academy, San Francisco, CA</em>
              </p>
              <ul className="bulletPoints">
                <li>
                  <em className="mainPoint">
                    Comprehensive Fullstack Software Engineering Program:
                  </em>{" "}
                  Successfully completed an accelerated fullstack software
                  engineering program sponsored by Perficient. This intensive
                  training not only equipped me with technical skills but also
                  instilled industry best practices, ensuring that I approach
                  development with a professional mindset.
                </li>
                <li>
                  <em className="mainPoint">
                    Comprehensive Skill Development:
                  </em>{" "}
                  Acquired proficiency in fundamental areas such as data
                  structures, algorithms, testing, front-end, back-end, and
                  database programming. Leveraged technologies including
                  JavaScript, HTML, Bootstrap, and ReactJS.
                </li>
                <li>
                  <em className="mainPoint">
                    Effective Collaboration and Communication:
                  </em>{" "}
                  Collaborated on pair-programming assignments with cohort
                  colleagues, honing daily communication skills. This experience
                  prepared me to effectively consult with clients.
                </li>
                <li>
                  <em className="mainPoint">
                    Holistic Skill Development and Collaborative Projects:
                  </em>{" "}
                  Effective Communication: Collaborated on pair-programming
                  assignments with cohort colleagues, honing daily communication
                  skills essential for client consultations. Team and Capstone
                  Projects: Engaged in collaborative team projects and capstone
                  initiatives, applying theoretical knowledge to real-world
                  scenarios.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h5>Residency Intern(web developer)</h5>
              <h5 className="timeFrame">2023 - 2023</h5>
              <p>
                <em>House Trevethan A Technology Studio, Tucson, AZ</em>
              </p>
              <ul className="bulletPoints">
                <li>
                  <em className="mainPoint">Mastered Internal Systems:</em> I
                  eagerly dove into learning about our company’s internal
                  systems, ensuring a seamless collaboration with my team. My
                  understanding of these systems allowed me to contribute
                  effectively to our projects.
                </li>
                <li>
                  <em className="mainPoint">Hands-On Learning and Practice:</em>{" "}
                  Beyond regular work hours, I set up a local sandbox
                  environment. Here, I immersed myself in learning the software
                  tools we utilized. I even dedicated time to personal projects,
                  honing my skills and accelerating my familiarity with the
                  tools.
                </li>
                <li>
                  <em className="mainPoint">
                    Dedication, Motivation, and Persistence:
                  </em>{" "}
                  These qualities were my driving force. I consistently
                  demonstrated unwavering dedication, staying motivated even
                  during challenging tasks. My persistence paid off in achieving
                  project milestones.
                </li>
                <li>
                  <em className="mainPoint">Shadowing and Inquisitiveness:</em>{" "}
                  I actively shadowed experienced developers, observing their
                  workflows and imbibing company best practices. My curiosity
                  led me to ask insightful questions, further enriching my
                  learning experience.
                </li>
              </ul>
            </div>

            <div className="d-flex justify-content-center mt-auto">
              <Button className="btn resumeBtn mt-4" type="button" href="https://docs.google.com/document/d/1Y0N8zVRRgj5NH0cevLKD87zx0eLd11IxnZWQpdgDw-Q/edit?usp=sharing" target="_blank">
                See Full Resume
              </Button>
            </div>

          </div>
        </Row>
      </Container>
    </section>
  );
};
