import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/alien.png";
import resume from "../assets/resume/ROLLY-LABUANAN-RESUME.pdf";

export const NavBar = () => {
  const [downloadStatus, setDownloadStatus] = useState("Download my CV");
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState("false");

  const handleDownloadClick = () => {
    setDownloadStatus("Downloading...");

    // Simulate the download process (replace with actual download logic)
    setTimeout(() => {
      setDownloadStatus("Done");
      setTimeout(() => {
        setDownloadStatus("Download my CV");
      }, 1500); // Reset the status after 1.5 seconds
    }, 2000); // Change the status after 2 seconds
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {/* <div className="social-icon">
            <a href="https://www.linkedin.com/in/rolly-labuanan/"><img src={navIcon1} alt="" /></a>
            <a href="https://web.facebook.com/rolly.labuanan/"><img src={navIcon2} alt="" /></a>
            <a href="#"><img src={navIcon4} alt="" /></a>
          </div>*/}
            <a
              className="btn btn-info download-button btn-sm"
              href={resume}
              download="ROLLY-LABUANAN-RESUME.pdf"
              onClick={handleDownloadClick}
            >
              {downloadStatus}
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
