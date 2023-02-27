import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="container">
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
          alt="ironhack's logo"
        />
        <img
          id="menu"
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
          alt="hamburger menu logo"
        />
        <h1>
          Say hello to
          <br />
          ReactJS
        </h1>
        <p>
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <a href="">Awesome!</a>
      </div>
      <div id="container-two">
        <div className="card">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
            alt="adjustable wrench icon"
          />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
            alt="video and pen icon"
          />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
            alt="screw icon"
          />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="card">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            alt="html icon"
          />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
