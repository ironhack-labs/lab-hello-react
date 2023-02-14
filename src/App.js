import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuIcon from "./images/menu-top-xs.png";
import MoreInfo from "./components/MoreInfo";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="headline text-start">
        <div className="navigation">
          <img src={ironhackLogo} alt="Ironhack logo" />
          <img src={menuIcon} alt="Menu icon" />
        </div>

        <div className="reactIntro">
          <h1 className="fw-bold welcome">
            Say hello to <br /> ReactJS
          </h1>
          <h4 className="fw-light">
            You will learn how to use <br />
            the most popular frontend library, <br />
            and become a super Ninja developer
          </h4>
          <button className="btn btn-light">Awesome!</button>
        </div>
      </div>

      <div className="wrapper1">
        <MoreInfo
          imageIcon={icon1}
          header="Declarative"
          text="React makes it painless to create interactive UIs."
        />

        <MoreInfo
          imageIcon={icon2}
          header="Components"
          text="Build encapsulated components that manage their state"
        />

        <MoreInfo
          imageIcon={icon3}
          header="Single-Way"
          text="A set of immutable values are passed to the component's."
        />

        <MoreInfo
          imageIcon={icon4}
          header="JSX"
          text="Statically-typed, designed to run o modern browsers."
        />
      </div>

      {/* <div className="moreInfo">
        <Icons imageIcon={icon1} />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div> */}
    </div>
  );
}

export default App;
