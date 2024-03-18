import "./App.css";

import Feature from "./components/Feature/Feature";

import IronHackLogo from "./assets/ironhack-logo.png";
import MenuIcon from "./assets/menu-top.png";

import FeatureOneImg from "./assets/icon1.png";
import FeatureTwoImg from "./assets/icon2.png";
import FeatureThreeImg from "./assets/icon3.png";
import FeatureFourImg from "./assets/icon4.png";

function App() {
  const features = [
    {
      name: "Declarative",
      description: "React makes it painless to create interactive UIs",
      img: FeatureOneImg,
    },
    {
      name: "Components",
      description: "Build encapsulated components that manage their state",
      img: FeatureTwoImg,
    },
    {
      name: "Single-Way",
      description: "A set of immutable values are passed to the component's",
      img: FeatureThreeImg,
    },
    {
      name: "JSX",
      description: "Statically-typed, designed to run on modern browsers",
      img: FeatureFourImg,
    },
  ];

  return (
    <>
      <div className="App">
        <section className="MainSection">
          <nav className="NavBar">
            <div>
              <img src={IronHackLogo} alt="ironhack logo" />
            </div>
            <div>
              <img src={MenuIcon} alt="menu icon" />
            </div>
          </nav>
          <div className="Header">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular front-end library, and
              become a super Ninja Developer
            </p>
            <button className="Button">Awesome!</button>
          </div>
        </section>
        <section className="Features">
          <Feature
            name={features[0].name}
            img={features[0].img}
            desc={features[0].description}
          ></Feature>
          <Feature
            name={features[1].name}
            img={features[1].img}
            desc={features[1].description}
          ></Feature>
          <Feature
            name={features[2].name}
            img={features[2].img}
            desc={features[2].description}
          ></Feature>
          <Feature
            name={features[3].name}
            img={features[3].img}
            desc={features[3].description}
          ></Feature>
        </section>
      </div>
    </>
  );
}

export default App;
