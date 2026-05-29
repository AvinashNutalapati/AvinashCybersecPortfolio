import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "../../styles/about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="align-items-center g-4 about-intro-row">
          <Col md={7}>
            <span className="section-label mono">{"// about me"}</span>
            <h1 className="about-title">
              Know Who <span className="gradient-text">I Am</span>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <div className="about-img-frame">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <h1 className="project-heading skills-heading">
          Languages <span className="gradient-text">&amp; Technologies</span>
        </h1>
        <Techstack />

        <h1 className="project-heading skills-heading">
          <span className="gradient-text">Tools</span> I Use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
