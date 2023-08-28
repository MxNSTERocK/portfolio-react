// import images
import angular from "../assets/img/angular.png";
import html from "../assets/img/html.png";
import bootstrap from "../assets/img/bootstrap.png";
import vb from "../assets/img/vb.png";
import react from "../assets/img/reactjs.png";
import css from "../assets/img/css.png";
import tailwind from "../assets/img/tailwind.png";
import mysql from "../assets/img/mysql.png";
import laravel from "../assets/img/laravel.png";
import javascript from "../assets/img/javascript.png";
import php from "../assets/img/php.png";

import gym from "../assets/img/gym.png";
import que from "../assets/img/que.png";
import portfolio from "../assets/img/port.png";
import three from "../assets/img/react-vid.mp4";

import dental from "../assets/img/dental.png";
import boot from "../assets/img/cert-boot.jpg";
import figma from "../assets/img/cert-figma.jpg";
import front from "../assets/img/cert-front.jpg";
import phps from "../assets/img/cert-php.jpg";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import HorizontalTimeline from "./HorizontalTimeline";
import Certificate from "./Certificate"; // Import the default export

export const IconsData = [
  {
    src: angular,
    alt: "Angular Icon",
    title: "Angular",
    level: "Basic",
  },
  {
    src: html,
    alt: "HTML Icon",
    title: "HTML",
    level: "Intermediate",
  },
  {
    src: bootstrap,
    alt: "Angular Icon",
    title: "Angular",
    level: "Basic",
  },
  {
    src: vb,
    alt: "HTML Icon",
    title: "HTML",
    level: "Intermediate",
  },
  {
    src: react,
    alt: "Angular Icon",
    title: "Angular",
    level: "Basic",
  },
  {
    src: css,
    alt: "HTML Icon",
    title: "HTML",
    level: "Intermediate",
  },
  {
    src: tailwind,
    alt: "Angular Icon",
    title: "Angular",
    level: "Basic",
  },
  {
    src: mysql,
    alt: "HTML Icon",
    title: "HTML",
    level: "Intermediate",
  },
  {
    src: laravel,
    alt: "HTML Icon",
    title: "HTML",
    level: "Intermediate",
  },
  {
    src: javascript,
    alt: "HTML Icon",
    title: "HTML",
    level: "Intermediate",
  },
  {
    src: php,
    alt: "HTML Icon",
    title: "HTML",
    level: "Intermediate",
  },
];

export const Projects = () => {
  const projects = [
    {
      title: "Capstone Project",
      description: "Spartan Boxing and Fitness Warehouse",
      imgUrl: gym,
      prog: "PHP, Bootstrap, MySQL, Jquery",
      link: "https://github.com/MxNSTERocK/Capstone-Project-2021-Spartan-Boxing-Fitness-Warehouse",
    },
    {
      title: "Capstone Project",
      description: "Queueing System for SHS",
      imgUrl: que,
      prog: "PHP, Bootstrap, MySQL, Ajax",
      link: "https://github.com/MxNSTERocK/SHS-queueing-SYSTEM",
    },
    {
      title: "Portfolio",
      description: "Personal Portfolio",
      imgUrl: portfolio,
      prog: "HTML, CSS, JavaScript",
      link: "https://iambrocolly-github-io-3wod.vercel.app/",
    },
    {
      title: "Activity",
      description: "Simple Login System with CRUD function",
      imgUrl: dental,
      prog: "VB.net, MySQL",
      link: "https://github.com/MxNSTERocK/simpleCrud-VB.net",
    },
    {
      title: "Portfolio Three",
      description: "Portfolio Three Js",
      imgUrl: three,
      prog: "React, Three Js",
      link: "https://github.com/MxNSTERocK/react-portfolio",
    },
  ];

  const certificateImages = [
    phps,
    boot,
    figma,
    front,
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={1}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've Developed a capstone project and
                    personal portfolio to display my skills. The capstone
                    project demonstrates my technical abilities and creative
                    problem-solving, while the portfolio showcases my journey,
                    commitment to learning, and collaboration strengths. This
                    showcase encapsulates my growth and expertise in a
                    straightforward manner.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-4 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Working Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificate</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <div className="timeline-container">
                        <Tab.Pane eventKey="second">
                          <Row></Row>
                        </Tab.Pane>
                      </div>
                      <Tab.Pane eventKey="second">
                        <HorizontalTimeline />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          <Certificate images={certificateImages} />
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
