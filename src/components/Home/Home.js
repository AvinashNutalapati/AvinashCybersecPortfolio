import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import FeaturedTalk from "./FeaturedTalk";
import Type from "./Type";
import "../../styles/home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <span className="hero-status">
                <span className="hero-status-dot" />
                Available for security engagements
              </span>

              <p className="hero-eyebrow mono">&gt; whoami</p>

              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Avinash&nbsp;Nutalapati</span>
                <span className="wave" role="img" aria-labelledby="wave">
                  {" "}👋🏻
                </span>
              </h1>

              <p className="hero-cert">
                <BsShieldLockFill /> Certified Information Systems Security Professional
                <span className="hero-cert-tag mono">CISSP</span>
              </p>

              <div className="hero-type">
                <Type />
              </div>

              <p className="hero-sub">
                I secure web technologies and products, hunt down vulnerabilities at any
                scale, and help build resilient digital environments.
              </p>

              <div className="hero-actions">
                <Link to="/project" className="btn-cyber">
                  <AiOutlineFundProjectionScreen /> View Projects
                </Link>
                <a
                  href="https://github.com/AvinashNutalapati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline"
                >
                  GitHub <FiArrowUpRight />
                </a>
              </div>
            </Col>

            <Col md={5} className="hero-visual-col">
              <div className="hero-visual">
                <div className="hero-visual-glow" />
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid hero-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <FeaturedTalk />
    </section>
  );
}

export default Home;
