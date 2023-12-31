import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Avinash Nutalapati </span>
            from <span className="purple"> Boston, MA. </span>
            <br /> I recently graduated with a Master of Science in Cybersecurity from Northeastern University.
            <br />
            Additionally, I have around 5 Years of Work experience. 
            <br />
            <br />
            Apart from Securing Digital Assets, other activities that I love to do!
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
