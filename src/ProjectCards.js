import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
          
          <Card.Body>
              <Card.Img variant="left" src={props.imgPath} alt="card-img" />
             <b> <Card.Title className="purple" style={{ color: "purple", fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>{props.title}</Card.Title></b>
              <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
