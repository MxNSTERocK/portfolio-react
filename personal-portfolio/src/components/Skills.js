import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { IconsData } from "./Projects";
import { useState } from "react";

export const Skills = () => {
  const [shakingIndex, setShakingIndex] = useState(-1);

  const handleIconClick = (index) => {
    console.log("Icon clicked:", IconsData[index].title);

    setShakingIndex(index);

    setTimeout(() => {
      setShakingIndex(-1);
    }, 1000);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                "Proficient in web development, <br></br> I fuse creativity with
                technical expertise to build seamless and captivating online
                experiences."
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {IconsData.map((icon, index) => (
                  <div
                    key={index}
                    className={`item ${
                      shakingIndex === index
                        ? "animate__animated animate__shakeX"
                        : ""
                    }`}
                    onClick={() => handleIconClick(index)}
                  >
                    <img src={icon.src} alt={icon.alt} />
                    <h5>{icon.title}</h5>
                    <i>{icon.level}</i>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
