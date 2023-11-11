import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SecureCoding from "../../Assets/Projects/SecureCoding.png";
import Attacks from "../../Assets/Projects/Attacks.png";


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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
