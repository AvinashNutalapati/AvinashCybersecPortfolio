import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsFileEarmarkText } from "react-icons/bs"; // Importing additional icon for PDF

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ borderRadius: '16px', boxShadow: '0 4px 24px rgba(100,50,150,0.10)', padding: '10px', minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ borderRadius: '12px', maxHeight: '180px', objectFit: 'cover' }} />
      ) : props.videoPath ? (
        <div className="video-container" style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
          <video width="100%" height="100%" controls style={{ borderRadius: '12px', objectFit: 'cover' }}>
            <source src={props.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card.Title style={{ fontWeight: 700 }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", marginBottom: '1rem' }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {props.pdfLink && (
          <Button variant="primary" href={props.pdfLink} target="_blank" style={{ marginLeft: "10px" }}>
            <BsFileEarmarkText /> &nbsp;
            {"PDF"}
          </Button>
        )}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
