import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const bodystyle = {
  display: "flex",
  margin: "100px 40px auto 40px",
};

function Body() {
  return (
    <div style={bodystyle} id="body">
      <div>
        <img src={icon1} alt="1" />
        <h1>Declarative</h1>
        <p style={{ textAlign: "start" }}>
          React makes it painless to create interactive UIs
        </p>
      </div>
      <div>
        <img src={icon2} alt="2" />
        <h1>Components</h1>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div>
        <img src={icon3} alt="3" />
        <h1>Single-Way</h1>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div>
        <img src={icon4} alt="4" />
        <h1>JSX</h1>
        <p>Satically-type, designed to run on modern browsers</p>
      </div>
    </div>
  );
}

export default Body;
