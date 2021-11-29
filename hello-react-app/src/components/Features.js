import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Features() {
  return (
    <div className="App-components-container">
      <span className="App-components">
        <img src={icon1} className="App-icon" alt="icon" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </span>
      <span className="App-components">
        <img src={icon2} className="App-icon" alt="icon" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </span>
      <span className="App-components">
        <img src={icon3} className="App-icon" alt="icon" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </span>
      <span className="App-components">
        <img src={icon4} className="App-icon" alt="icon" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </span>
    </div>
  );
}

export default Features;
