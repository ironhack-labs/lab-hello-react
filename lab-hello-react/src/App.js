import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import "./App.css";
import Card from "./components/card";
import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import img3 from "./images/icon3.png";
import img4 from "./images/icon4.png";

const card1 = {
  img: img1,
  title: "Declarative",
  description: "React makes it painless to create interactive UIs",
};

const card2 = {
  img: img2,
  title: "Components",
  description: "Build encapsulated components that manage their state.",
};

const card3 = {
  img: img3,
  title: "Single-Way",
  description: "A set of immutable values are passed to the component's.",
};

const card4 = {
  img: img4,
  title: "JSX",
  description: "Statically-typed. desogmed to run on modern browsers.",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div className="img1">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="img2">
            <img src={menu} className="App-menu" alt="logo" />
          </div>
        </nav>
        <div className="container">
          <div>
            <h1>Say hello to ReactJS</h1>
          </div>
          <div>
            <h4>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </h4>
          </div>
          <p className="awesome"><span> Awesome! </span></p>
        </div>
      </header>
      <div className="card">
        <Card card={card1} />
        <Card card={card2} />
        <Card card={card3} />
        <Card card={card4} />
      </div>
    </div>
  );
}

export default App;
