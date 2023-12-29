import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiJavascript1,
  DiHtml5,
  DiMysql,
  DiGoogleCloudPlatform,
  DiAws,
  DiJava,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiDocker,
  DiHackernews
} from "react-icons/di";

function Techstack() {
  const descriptionStyle = { fontSize: '12px', textAlign: 'center' }; // Adjust font size as needed

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={descriptionStyle}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={descriptionStyle}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={descriptionStyle}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={descriptionStyle}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
        <p style={descriptionStyle}>GCP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <p style={descriptionStyle}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={descriptionStyle}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={descriptionStyle}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={descriptionStyle}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={descriptionStyle}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p style={descriptionStyle}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHackernews />
        <p style={descriptionStyle}>Hacker News</p>
      </Col>
    </Row>
  );
}

export default Techstack;
