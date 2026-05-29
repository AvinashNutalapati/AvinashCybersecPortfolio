import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsFileEarmarkText } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view glass">
      <div className="project-media">
        {props.imgPath ? (
          <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-media-img" />
        ) : props.videoPath ? (
          <video className="project-media-img" controls>
            <source src={props.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-text">
          {props.description}
        </Card.Text>
        <div className="project-card-actions">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {props.pdfLink && (
            <Button variant="primary" href={props.pdfLink} target="_blank" rel="noopener noreferrer">
              <BsFileEarmarkText /> &nbsp;PDF
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noopener noreferrer">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
