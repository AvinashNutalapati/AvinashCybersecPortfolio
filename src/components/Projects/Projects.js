import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SecureCoding from "../../Assets/Projects/SecureCoding.png";
import Attacks from "../../Assets/Projects/Attacks.png";
import SplunkEs from "../../Assets/Projects/SplunkEs.jpeg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SecureCoding}
              isBlog={false}
              title="Secure Coding"
              description="Fixing Vulnerabilities in C Language"
              ghLink="https://github.com/AvinashNutalapati/Fixing-Vulnerabilities-in-C-language"
              demoLink="https://github.com/AvinashNutalapati/Fixing-Vulnerabilities-in-C-language#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Attacks}
              isBlog={false}
              title="Attacks"
              description="My Personal Experiments on writing an Attack Code."
              ghLink="https://github.com/AvinashNutalapati/Attacks"
              demoLink="https://github.com/AvinashNutalapati/Attacks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SplunkEs}
              isBlog={false}
              title="Splunk Home Lab Set Up"
              description="How to setup a Splunk Home Lab using Docker Container"
              ghLink="https://github.com/AvinashNutalapati/Attacks"
              demoLink="https://www.linkedin.com/posts/avinash-nutalapati_cybersecurity-siem-splunk-activity-7115729259091877888-2xmA?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
