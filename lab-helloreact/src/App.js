import logo from "./img/ironhack-logo-xs.png";
import menu from "./img/menu-top-xs.png";
import "./App.css";
import Button from "./component/Button";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
const declarative = <h1> Declarative </h1>;
const components = <h1> Components </h1>;
const singleWay = <h1> Single-Way </h1>;
const jsx = <h1> JSX </h1>;
const declarativeText = (
  <p>React makes it painless to create interactive UIs.</p>
);
const componentsText = (
  <p>Build encapsulated components that mange their state.</p>
);
const singleWayText = (
  <p>A set of immulable values are passed to the coponent's.</p>
);
const jsxText = <p>Statically-type, designed to run on modern browsers.</p>;
const title = (
  <h1>
    Say Hello to <p>ReactJS</p>
  </h1>
);
const text = (
  <p>
    You will learn how to use <p>the most popular frontend library,</p>
    <p>and become a supr Ninja developer.</p>
  </p>
);

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <div>
            <img className="logo" src={logo} alt="logo"></img>
            <img className="menu" src={menu} alt="menu"></img>
          </div>

          <div className="title">{title}</div>
          <div className="text">{text}</div>
          <div className="button">
            <Button />
          </div>
        </header>
      </div>
      <div className="body">
        <div className="bodycard1">
          <img className="icon" src={icon1} alt="First Icon Ironhack" />
          <div className="description1">{declarative}</div>
          <div className="descriptiontext">{declarativeText}</div>
        </div>

        <div className="bodycard1">
          <img className="icon" src={icon2} alt="Second Icon Ironhack" />
          <div className="description1">{components}</div>
          <div className="descriptiontext">{componentsText}</div>
        </div>

        <div className="bodycard1">
          <img className="icon" src={icon3} alt="Third Icon Ironhack" />
          <div className="description1">{singleWay}</div>
          <div className="descriptiontext">{singleWayText}</div>
        </div>

        <div className="bodycard1">
          <img className="icon" src={icon4} alt="Fourth Icon Ironhack" />
          <div className="description1">{jsx}</div>
          <div className="descriptiontext">{jsxText}</div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
