import "./App.css";
import FirstIcon from "./images/icon1.png";
import SecondIcon from "./images/icon2.png";
import ThirdIcon from "./images/icon3.png";
import FourthIcon from "./images/icon4.png";

function Features() {
  return (
    <div className="Features">
      <div>
        <img src={FirstIcon} alt="first-Icon" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={SecondIcon} alt="second-Icon" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={ThirdIcon} alt="third-Icon" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src={FourthIcon} alt="fourth-Icon" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Features;
