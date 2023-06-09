// We import other components to be able to use them inside of this component
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";
import ImageFour from "./ImageFour";

// React Component <Gallery />

function Gallery() {
  return (

    <div id="images">


      <div className="image1">
      <ImageOne />
      <h2>Declarative</h2>
      <p>React makes it<br></br> painless to create<br></br> interactive UIs.</p>
      </div>

      <div className="image2">
      <ImageTwo />
      <h2>Components</h2>
      <p>Build encapsulated<br></br> components that<br></br> manage their state.</p>
      </div>

      <div className="image3">
      <ImageThree />
      <h2>Single-Way</h2>
      <p>A set of immaculate<br></br> values are passed to<br></br> the components.</p>
      </div>

      <div className="image4">
      <ImageFour />
      <h2>JSX</h2>
      <p>Statitically-typed,<br></br> designed to run on<br></br> modern browsers.</p>
      </div>


    </div>
  );
}

export default Gallery;