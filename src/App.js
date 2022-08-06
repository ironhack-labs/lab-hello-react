import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menutop from "./images/menu-top-xs.png";
import iconOne from "./images/icon1.png";
import iconTwo from "./images/icon2.png";
import iconThree from "./images/icon3.png";
import iconFour from "./images/icon4.png";

const heading = <h1>Say hello to ReactJS!</h1>;
const introduction = (
  <p>
    You will learn how to use the most popular frontend library, and become a
    super Ninja developer.
  </p>
);
const textOne = <p>React makes it painless to create interactive UIs.</p>;
const textTwo = <p>Build encapsulated components that mange their state.</p>;
const textThree = (
  <p>A set of immulable values are passed to the coponent's.</p>
);
const textFour = <p>Statically-type, designed to run on modern browsers.</p>;

function App() {
  return (
    <div className="App">
      <div className="nav">
        <nav>
          <img src={ironhackLogo} alt="ironhack logo" />
          <img src={menutop} alt="menu" />
        </nav>
      </div>
      <div className="App-header">
        <div className="title">{heading}</div>

        <div className="intro">{introduction}</div>

        <button className="btn">AWESOME!</button>
      </div>

      <div className="cards">
        <div className="cardOne">
          <img src={iconOne} alt="icon-one" />
          <h2>Declarative</h2>
          <p>{textOne}</p>
        </div>
        <div className="cardTwo">
          <img src={iconTwo} alt="icon-two" />
          <h2>Components</h2>
          <p>{textTwo}</p>
        </div>
        <div className="cardThree">
          <img src={iconThree} alt="icon-three" />
          <h2>Single-Way</h2>
          <p>{textThree}</p>
        </div>
        <div className="cardFour">
          <img src={iconFour} alt="icon-four" />
          <h2>JSX</h2>
          <p>{textFour}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
