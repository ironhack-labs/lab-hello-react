// We import other components to be able to use them inside of this component
import ImgOne from "../images/ImgOne";
import ImgTwo from "../images/ImgTwo";
import ImgThree from "../images/ImgThree";
import ImgFour from "../images/ImgFour";

// React Component <Gallery />

function Gallery() {
  return (
    <div id="gallery">
      <ImgOne />
      <ImgTwo />
      <ImgThree />
      <ImgFour />
    </div>
  );
}

export default Gallery;
