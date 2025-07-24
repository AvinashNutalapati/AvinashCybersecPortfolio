import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SecureCoding from "../../Assets/Projects/SecureCoding.png";
import Attacks from "../../Assets/Projects/Attacks.png";
import SplunkEs from "../../Assets/Projects/SplunkEs.jpeg";
import MyVideo from '../../Assets/Videos/PhishDemo.mp4';
import Encryption from '../../Assets/Projects/Encryption.png';
import LNGExportPDF from '../../Assets/Projects/LNGExport.pdf';
import LNGExportPNG from '../../Assets/Projects/LNGExport.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ fontWeight: 700, marginBottom: '1.5rem' }}>
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", marginBottom: '2.5rem' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="g-4 justify-content-center">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SecureCoding}
              isBlog={false}
              title="Secure Coding"
              description="Fixing Vulnerabilities in C Language."
              ghLink="https://github.com/AvinashNutalapati/Fixing-Vulnerabilities-in-C-language"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Attacks}
              isBlog={false}
              title="Attacks"
              description="My Personal Experiments on writing an Attack Code."
              ghLink="https://github.com/AvinashNutalapati/Attacks"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SplunkEs}
              isBlog={false}
              title="Splunk Home Lab Set Up"
              description="Built a Splunk SIEM Home Lab with Docker to practice SOC skills, data analytics, and security monitoring in a real-world environment."
              demoLink="https://www.linkedin.com/posts/avinash-nutalapati_cybersecurity-siem-splunk-activity-7115729259091877888-2xmA?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={MyVideo}
              title="How to Create a Phishing Website?"
              description="!! Only For Educational Purposes !!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Encryption}
              isBlog={false}
              title="Encryption"
              description="Encrypted Client-Server Communication."
              ghLink="https://github.com/AvinashNutalapati/Encryption"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
