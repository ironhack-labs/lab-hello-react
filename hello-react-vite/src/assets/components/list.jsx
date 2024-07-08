import image1 from "../images/icon1.png";
import image2 from "../images/icon2.png";
import image3 from "../images/icon3.png";
import image4 from "../images/icon4.png";

function List() {
  return (
    <div className="lista">
      <div id="icon1">
        <img src={image1} alt="image1" />
        <h4>Declarative</h4>
        <p>React makes it paintless to create interactive Uls</p>
      </div>

      <div id="icon2">
        <img src={image2} alt="image2" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div id="icon3">
        <img src={image3} alt="image3" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component´s</p>
      </div>

      <div id="icon4">
        <img src={image4} alt="image4" />
        <h4>JSX</h4>
        <p>Statically-typed. Designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default List;
