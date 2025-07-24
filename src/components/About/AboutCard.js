import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Avinash Nutalapati</span>, a cybersecurity professional with a Master's from Northeastern University and 5+ years of experience across security operations, threat analysis, and vulnerability management. I've contributed to leading organizations, enjoy solving complex security challenges, and am passionate about building resilient digital environments. Beyond work, I love to keep learning and sharing knowledge in the cybersecurity community.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Threat Intelligence Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to Secure things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Avinash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
