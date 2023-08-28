import { Col, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="about-bx wow zoomIn">
                <h2>About Me</h2>
                <Row>
                  <Col>
                    <p>
                      Hi, I'm Rolly Labuanan,
                      <br /> holding a Bachelor of Science in Information
                      Technology from City College of Tagaytay, graduated in
                      2022. My studies fortified my IT skills, now ready for
                      real-world action. With prior experience as IT staff, I've
                      honed my tech abilities and practical insights. Excited to
                      contribute my expertise and enthusiasm to a new team, I'm
                      eager to keep learning and growing in the industry.
                    </p>
                  </Col>
                  <Col>
                    <p>
                      Equipped with web development skills
                      acquired during my on-the-job training at Leentech Network
                      Solution. <br />
                      Throughout the training, I delved into front-end
                      work using Angular and the Bootstrap CSS framework. On the
                      back end, I tackled Laravel, became proficient in database
                      handling using Eloquent, explored creating RESTful
                      services with Laravel, and successfully completed
                      practical projects.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
