import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsFileEarmarkText } from "react-icons/bs"; // Importing additional icon for PDF

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : props.videoPath ? (
        <div className="video-container" style={{ width: '100%', height: 'auto' }}>
          <video width="100%" height="auto" controls>
            <source src={props.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
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
