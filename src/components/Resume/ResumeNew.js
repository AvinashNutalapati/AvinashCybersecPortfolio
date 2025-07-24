import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';

function Timeline() {
  return (
    <Container fluid className="timeline-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          My <span className="purple">Professional Timeline</span>
        </h1>
        <Row className="justify-content-center">
          <Col md={8}>
            <ul className="timeline-list">
              <li className="timeline-item">
                <div className="timeline-date">Mar 2024 – Present</div>
                <div className="timeline-content">
                  <h4>Vulnerability Analyst – L8 Senior</h4>
                  <span className="purple">Discover Financial Services – Riverwoods, IL</span>
                  <p>Lead centralized vulnerability management, incident response, and application security improvements for enterprise systems.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Feb 2024 – Mar 2024</div>
                <div className="timeline-content">
                  <h4>Information Protection Senior Advisor</h4>
                  <span className="purple">The Cigna Group | Technology Security Evaluations – App Sec – Bloomfield, CT</span>
                  <p>Advised on application security and risk mitigation for new and existing projects.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Sep 2022 – Dec 2023</div>
                <div className="timeline-content">
                  <h4>Graduate Teaching Assistant</h4>
                  <span className="purple">Northeastern University</span>
                  <p>Supported cybersecurity courses, mentoring students and assisting with labs and projects.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Jun 2023 – Aug 2023</div>
                <div className="timeline-content">
                  <h4>Internal Audit Analyst</h4>
                  <span className="purple">JP Morgan Chase & Co. – Legacy West Plano, TX</span>
                  <p>Conducted audits and created training resources to improve SDLC controls and technology processes.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Jan 2023 – May 2023</div>
                <div className="timeline-content">
                  <h4>Security Engineering | Detection and Response</h4>
                  <span className="purple">RapidSOS | New York</span>
                  <p>Enhanced cloud and application security through automation, monitoring, and incident response.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Jun 2021 – Apr 2022</div>
                <div className="timeline-content">
                  <h4>Senior Security Analyst L3 (Specialist)</h4>
                  <span className="purple">Metmox Solutions (Now Ultraviolet Cybersecurity), Hyderabad India</span>
                  <p>Led vulnerability management and security operations for large-scale enterprise environments.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">May 2018 – Mar 2021</div>
                <div className="timeline-content">
                  <h4>Senior Security Delivery Associate L1-L2 | Shift Lead</h4>
                  <span className="purple">Accenture | MSSP – Security Operations Center</span>
                  <p>Managed SOC operations, threat detection, and incident response for Fortune 500 clients.</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Timeline;
