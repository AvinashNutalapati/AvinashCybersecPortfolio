import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", alignItems: 'center' }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", fontWeight: 700 }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ maxHeight: '260px', borderRadius: '18px', boxShadow: '0 4px 24px rgba(100,50,150,0.12)' }} />
          </Col>
        </Row>
        <h1 className="project-heading" style={{ fontWeight: 700, marginTop: '2rem' }}>
          Programming Languages <strong className="purple"> | Technologies </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading" style={{ fontWeight: 700, marginTop: '2rem' }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
