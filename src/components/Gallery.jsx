import React from "react";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";
import ImageFour from "./ImageFour";

function Gallery() {
    return (
      <div id="gallery" className="container">
        <div className="row">
          <div className="col-md-3">
            <ImageOne />
          </div>
          <div className="col-md-3">
            <ImageTwo />
          </div>
          <div className="col-md-3">
            <ImageThree />
          </div>
          <div className="col-md-3">
            <ImageFour />
          </div>
        </div>
      </div>
    );
  }

export default Gallery;
