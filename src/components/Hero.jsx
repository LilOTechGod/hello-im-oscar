import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import video from "../assets/portfolio_introduction.mp4";
import "./Hero.css";
import Ratio from "react-bootstrap/Ratio";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <div>
      <Row className="mb-5 flex-column-reverse flex-md-row">
        <Col className="typewriterComponent order-2 order-md-1">
          <TypeWriter />
        </Col>
        <Col
          className="video p-0 d-flex flex-column align-items-center justify-content-center position-relative order-1 order-md-2">
          <div style={{ width: "100%", height: "auto" }}>
            <Ratio aspectRatio="16x9">
              <iframe
                src={video}
                frameborder="0"
                className=" videoBoxShadow"
                allowFullScreen
                title="introduction"
              ></iframe>
            </Ratio>
          </div>
        </Col>
      </Row>
    </div>
  );
}
