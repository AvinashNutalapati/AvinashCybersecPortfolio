import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import cisspLogo from '../../Assets/Logos/cissp.png';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center" style={{ marginBottom: '2rem' }}>
          <Col md={8} className="home-about-description" style={{ paddingBottom: 30 }}>
            <h1 style={{ fontSize: "2.6em", fontWeight: 700 }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Cybersecurity and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in addressing vulnerabilities of
              <i>
                <b className="purple"> ANY SCALE. </b>
              </i>
              <br />
              <br />
              My field of Interest's are Securing&nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also assess{" "}
                <b className="purple">
                  Cyber Risks.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for 
                <b className="purple"> Learning New Technologies </b> and
              <i>
                <b className="purple">
                  {" "}
                  Evaluating Risks and Standards
                </b>
              </i>
              &nbsp; To Achieve
              <i>
                <b className="purple"> Much Secured Environment. </b>
              </i>
            </p>
            <div style={{ margin: '1.5em 0 1em 0', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1em' }}>
              <a href="https://www.credly.com/badges/58733fb2-9917-4e10-9616-66936503280b/public_url" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src={cisspLogo} alt="CISSP Badge" style={{ width: 60, height: 60, borderRadius: 8, boxShadow: '0 2px 8px rgba(44,62,80,0.14)', background: '#fff', marginRight: 12 }} />
                <span style={{ fontWeight: 600, color: 'var(--imp-text-color)', fontSize: '1.1em' }}>
                  Certified Information Systems Security Professional (CISSP)
                </span>
              </a>
            </div>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: '220px', borderRadius: '50%', boxShadow: '0 4px 24px rgba(100,50,150,0.12)' }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" style={{ marginTop: '1.5rem' }}>
            <h1 style={{ fontWeight: 700 }}>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links" style={{ display: 'flex', justifyContent: 'center', gap: '18px', padding: 0, margin: 0 }}>
              <li className="social-icons">
                <a
                  href="https://github.com/AvinashNutalapati"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/GeoCyberWatch1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avinash-nutalapati/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/avin_chowdry.io"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
