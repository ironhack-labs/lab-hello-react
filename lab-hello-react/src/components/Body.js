import image1 from "../images/icon1.png";
import image2 from "../images/icon2.png";
import image3 from "../images/icon3.png";
import image4 from "../images/icon4.png";

function Body() {
  return (
    <div class="body">
      <div>
        <img src={image1}></img>
        <h3>Declarative</h3>
        <p>React makes it</p>
        <p>painless to create</p>
        <p>interactive UIs</p>
      </div>
      <div>
        <img src={image2}></img>
        <h3>Components</h3>
        <p>Build encapsulated</p>
        <p>components that</p>
        <p>manage their state.</p>
      </div>
      <div>
        <img src={image3}></img>
        <h3>Single-Way</h3>
        <p>A set of immutable</p>
        <p>values are passed to</p>
        <p>the component's</p>
      </div>
      <div>
        <img src={image4}></img>
        <h3>JSX</h3>
        <p>Statically-typed</p>
        <p>designed to run on</p>
        <p>modern browsers.</p>
      </div>
    </div>
  );
}

export default Body;
