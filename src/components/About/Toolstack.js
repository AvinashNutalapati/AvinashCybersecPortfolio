import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiKalilinux,
  SiWindows,
  SiOpenai,
  SiSplunk,
  SiAuth0,
  SiOkta,
  SiSymantec,
  SiVirustotal,
  SiVmware,
  SiJira,
  SiBitbucket,
  SiGitlab,
  SiGithub,
  SiGit,
  SiJenkins,
  SiSonarcloud // For Sonatype/Nexus (closest available)
} from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa"; // For ArmorCode and Cycode (placeholder)
// import cycodeLogo from "../../Assets/icons/cycode-logo.png"; // Not available, use placeholder

function Toolstack() {
  const descriptionStyle = { fontSize: '12px', textAlign: 'center' };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Each icon with its description, apply the style to the description */}
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <p style={descriptionStyle}>Kali Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={descriptionStyle}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <p style={descriptionStyle}>OpenAI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAuth0 />
        <p style={descriptionStyle}>Auth0</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <p style={descriptionStyle}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
        <p style={descriptionStyle}>Splunk</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={descriptionStyle}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOkta />
        <p style={descriptionStyle}>Okta</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymantec />
        <p style={descriptionStyle}>Symantec</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirustotal />
        <p style={descriptionStyle}>VirusTotal</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />
        <p style={descriptionStyle}>VMware</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p style={descriptionStyle}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
        <p style={descriptionStyle}>Bitbucket</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <p style={descriptionStyle}>GitLab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={descriptionStyle}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={descriptionStyle}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p style={descriptionStyle}>Jenkins</p>
      </Col>
      {/* New tools below */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarcloud />
        <p style={descriptionStyle}>Nexus/Sonatype</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiContrast />
        <p style={descriptionStyle}>Contrast</p>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt />
        <p style={descriptionStyle}>ArmorCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Placeholder for Cycode, replace with logo if available */}
        <FaShieldAlt />
        <p style={descriptionStyle}>Cycode</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
