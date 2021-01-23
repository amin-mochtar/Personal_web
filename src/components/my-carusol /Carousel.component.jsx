import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import slide1 from "../../assets/img/carousal/slide1.webp"
import slide2 from "../../assets/img/carousal/slide2.webp"
import slide3 from "../../assets/img/carousal/slide3.webp"
import "./Carousel.styles.css"
import Divider from "../divider/divider.component"

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators={false} interval={2600} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slide1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slide2}
            alt="2nd slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slide3}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Divider />
    </div>
  );
};

export default MyCarousel;
