import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, prog }) => {
  const isVideo = imgUrl.endsWith(".mp4");

  const getProgStyle = (language) => {
    switch (language.toLowerCase()) {
      case "php":
        return { backgroundColor: "blue", color: "white" };
      case "ajax":
        return { backgroundColor: "red", color: "white" };
      case "mysql":
        return { backgroundColor: "maroon", color: "white" };
      case "jquery":
        return { backgroundColor: "green", color: "white" };
      case "bootstrap":
        return { backgroundColor: "violet", color: "white" };
      case "html":
        return { backgroundColor: "orange", color: "white" };
      case "css":
        return { backgroundColor: "aqua", color: "white" };
      case "javascript":
        return { backgroundColor: "teal", color: "white" };
      case "vb.net":
        return { backgroundColor: "teal", color: "white" };
      case "react":
        return { backgroundColor: "prussian", color: "white" };
      case "three":
        return { backgroundColor: "cypress", color: "white" };
      default:
        return { backgroundColor: "gray", color: "white" };
    }
  };

  const programmingLanguages = prog.split(",").map((lang) => lang.trim());

  return (
    <Col size={12} sm={2} md={6}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className="proj-imgbx">
          {isVideo ? (
            <video autoPlay controls poster={imgUrl} className="project-video">
              <source src={imgUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={imgUrl} alt={title} />
          )}
          <div className="proj-txtx">
            <h4 style={{ color: "white" }}>{title}</h4>
            <span style={{ color: "white" }}>{description}</span>
            <br />
            <div className="prog-box">
              {programmingLanguages.map((language, index) => (
                <div
                  key={index}
                  className="prog"
                  style={getProgStyle(language)}
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
