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
  SiJenkins
} from "react-icons/si";

function Toolstack() {
  const descriptionStyle = { fontSize: '12px', textAlign: 'center' }; // Adjust font size as needed

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
    </Row>
  );
}

export default Toolstack;
