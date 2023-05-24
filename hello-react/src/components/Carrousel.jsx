import React from "react";
import { Carousel } from "react-responsive-carousel";

import img1 from "../images/Icon_1.png";
import img2 from "../images/Icon_2.png";
import img3 from "../images/Icon_3.png";

function MyCarousel() {
  return (
    <Carousel autoPlay interval={3000} infiniteLoop>
      <div>
        <img src={img1} alt="First slide" />
        <p className="legend">Declarative</p>
      </div>
      <div>
        <img src={img2} alt="Second slide" />
        <p className="legend">Components </p>
      </div>
      <div>
        <img src={img3} alt="Third slide" />
        <p className="legend">Single-way</p>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
