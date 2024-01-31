import ImageOne from "../assets/icon1.png";
import ImageTwo from "../assets/icon2.png";
import ImageThree from "../assets/icon3.png";
import ImageFour from "../assets/icon4.png";

function Gallery() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img src={ImageOne} alt="declarative_image" className="portrait" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={ImageTwo} alt="components_image" className="portrait" />
        <h2>Componets</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={ImageThree} alt="singleWay_image" className="portrait" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component´s.</p>
      </div>
      <div>
        <img src={ImageFour} alt="jsx_image" className="portrait" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Gallery; // component export
