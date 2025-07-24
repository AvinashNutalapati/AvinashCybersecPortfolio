import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "../../styles/home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header" style={{ paddingTop: 60, paddingBottom: 30 }}>
              <h1 className="heading" style={{ paddingBottom: 10, textAlign: 'left', fontWeight: 700 }}>
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name" style={{ textAlign: 'left', fontWeight: 800, marginBottom: 0 }}>
                I'M <span className="main-name">Avinash Nutalapati</span>, <span className="main-name" style={{ fontSize: '0.8em', fontWeight: 600 }}>CISSP</span>
              </h1>
              <div style={{ padding: '40px 0 0 0', textAlign: 'left' }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '400px', borderRadius: '18px', boxShadow: '0 4px 24px rgba(100,50,150,0.12)' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
