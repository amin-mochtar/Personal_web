import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import slide2 from "../../assets/img/carousal/slide2.webp"
import slide3 from "../../assets/img/carousal/slide3.webp"
import "./Carousel.styles.css"

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators={true} interval={2600} pause={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slide2}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>lorem teks</p>
          </Carousel.Caption> */}
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
              teks pesan message
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      {/* <Divider /> */}
    </div>
  );
};

export default MyCarousel;
