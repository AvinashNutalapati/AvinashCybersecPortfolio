import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";
import "../../styles/talk.css";

const TALK_URL = "https://www.youtube.com/watch?v=pvRFP3aht7g&t=6s";
const EMBED_URL = "https://www.youtube-nocookie.com/embed/pvRFP3aht7g?start=6&rel=0";

function FeaturedTalk() {
  return (
    <Container fluid className="talk-section" id="talk">
      <Container>
        <span className="section-label mono">{"// featured talk"}</span>
        <h1 className="project-heading">
          On the <span className="gradient-text">Stage</span>
        </h1>
        <Row className="talk-row align-items-center g-4">
          <Col md={7}>
            <div className="talk-embed glass">
              <iframe
                src={EMBED_URL}
                title="Rewriting the Playbook: Smarter Vulnerability Management — BSides Las Vegas"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Col>
          <Col md={5}>
            <div className="talk-meta">
              <span className="talk-badge">
                <BsMicFill /> BSides Las Vegas
              </span>
              <h2 className="talk-title">
                Rewriting the Playbook: Smarter Vulnerability Management with
                EPSSv3, CVSSv4, SSVC &amp; VEX Frameworks
              </h2>
              <p className="talk-desc">
                A practical playbook for modernizing vulnerability management —
                combining EPSSv3, CVSSv4, SSVC, and VEX to prioritize what truly
                matters and cut through the noise of endless CVEs.
              </p>
              <a
                className="btn-cyber"
                href={TALK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube /> Watch on YouTube <FiArrowUpRight />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FeaturedTalk;
