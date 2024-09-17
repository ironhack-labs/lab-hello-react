/* --------------------------- */
/* Import components           */
/* --------------------------- */
import ImageOne     from "./ImageOne";
import ImageTwo     from "./ImageTwo";
import ImageThree   from "./ImageThree";
import ImageFour    from "./ImageFour";


/* --------------------------- */
/* React Component <Gallery /> */
/* --------------------------- */
function Gallery() {
    return (
      <div id="gallery">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
        <ImageFour />
      </div>
    );
  }

export default Gallery;