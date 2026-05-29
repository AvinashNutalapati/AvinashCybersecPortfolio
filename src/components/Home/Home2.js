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
        <Row className="align-items-center g-4">
          <Col md={7} className="home-about-description">
            <span className="section-label mono">{"// introduction"}</span>
            <h1>
              Let me <span className="gradient-text">introduce</span> myself
            </h1>
            <div className="glass home-about-card">
              <p className="home-about-body">
                I fell in love with Cybersecurity and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in addressing vulnerabilities of
                <i>
                  <b className="purple"> any scale. </b>
                </i>
                <br />
                <br />
                My fields of interest are securing&nbsp;
                <i>
                  <b className="purple">web technologies and products</b> and
                  assessing{" "}
                  <b className="purple">cyber risks.</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for
                <b className="purple"> learning new technologies </b> and
                <i>
                  <b className="purple"> evaluating risks and standards </b>
                </i>
                to achieve a
                <i>
                  <b className="purple"> much more secure environment. </b>
                </i>
              </p>
              <a
                href="https://www.credly.com/badges/58733fb2-9917-4e10-9616-66936503280b/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="cissp-badge"
              >
                <img src={cisspLogo} alt="CISSP Badge" className="cissp-badge-img" />
                <span className="cissp-badge-text">
                  Certified Information Systems Security Professional (CISSP)
                </span>
              </a>
            </div>
          </Col>
          <Col md={5} className="home-avatar-col">
            <Tilt>
              <img src={myImg} className="img-fluid home-avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AvinashNutalapati"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/GeoCyberWatch1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avinash-nutalapati/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
