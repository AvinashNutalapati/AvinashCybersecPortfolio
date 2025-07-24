import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// Logo URLs – use local assets if available
import discoverLogo from "../../Assets/Logos/discover.png";
import cignaLogo from "../../Assets/Logos/cigna.png";
import nuLogo from "../../Assets/Logos/northeastern.png";
import jpmcLogo from "../../Assets/Logos/jpmc.png";
import rapidsosLogo from "../../Assets/Logos/rapidsos.png";
import accentureLogo from "../../Assets/Logos/accenture.png";
import metmoxlogo from "../../Assets/Logos/metmox.jpeg";
import "../../styles/timeline.css";

const timelineItems = [
  {
    date: "Mar 2024 – Present",
    logo: discoverLogo,
    alt: "Discover",
    title: "Discover Financial Services – Riverwoods, IL",
    description:
      "Lead centralized vulnerability management, incident response, and application security improvements for enterprise systems.",
  },
  {
    date: "Feb 2024 – Mar 2024",
    logo: cignaLogo,
    alt: "Cigna",
    title: "The Cigna Group | Technology Security Evaluations – App Sec – Bloomfield, CT",
    description:
      "Advised on application security and risk mitigation for new and existing projects.",
  },
  {
    date: "Sep 2022 – Dec 2023",
    logo: nuLogo,
    alt: "Northeastern University",
    title: "Northeastern University",
    description:
      "Supported cybersecurity courses, mentoring students and assisting with labs and projects.",
  },
  {
    date: "Jun 2023 – Aug 2023",
    logo: jpmcLogo,
    alt: "JP Morgan Chase & Co.",
    title: "JP Morgan Chase & Co. – Legacy West Plano, TX",
    description:
      "Conducted audits and created training resources to improve SDLC controls and technology processes.",
  },
  {
    date: "Jan 2023 – May 2023",
    logo: rapidsosLogo,
    alt: "RapidSOS",
    title: "RapidSOS | New York",
    description:
      "Enhanced cloud and application security through automation, monitoring, and incident response.",
  },
  {
    date: "Jun 2021 – Apr 2022",
    logo: metmoxlogo,
    alt: "Metmox/Ultraviolet Cybersecurity",
    title: "Metmox Solutions (Now Ultraviolet Cybersecurity) – Hyderabad, India",
    description:
      "Led vulnerability management and security operations for large‑scale enterprise environments.",
  },
  {
    date: "May 2018 – Mar 2021",
    logo: accentureLogo,
    alt: "Accenture MSSP",
    title: "Accenture | MSSP – Security Operations Center",
    description:
      "Managed SOC operations, threat detection, and incident response for Fortune 500 clients.",
  },
];

// Helper to extract year from date string
function getYear(date) {
  // Extracts the first 4-digit number (year) from the date string
  const match = date.match(/\d{4}/);
  return match ? match[0] : '';
}

function Timeline() {
  return (
    <Container fluid className="timeline-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-5">
          My <span className="purple">Professional Timeline</span>
        </h1>
        <Row className="justify-content-center">
          <Col md={8}>
            <ul className="timeline-list">
              {timelineItems.map(({ date, logo, alt, title, description }, idx) => (
                <li className="timeline-item" key={idx}>
                  <span className="timeline-date">{date}</span>
                  <div className="timeline-entry">
                    <div className="timeline-logo">
                      <img src={logo} alt={alt} />
                    </div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{title}</h3>
                      <p className="timeline-desc">{description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Timeline;
