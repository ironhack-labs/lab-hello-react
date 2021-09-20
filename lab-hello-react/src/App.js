import "./App.css";
import Card from "./components/card";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import img3 from "./images/icon3.png";
import img4 from "./images/icon4.png";

const card1 = {
  img: img1,
  title: "Declarative",
  descripcion: "React makes it paintless to create interactive UIs",
};
const card2 = {
  img: img2,
  title: "Components",
  descripcion: "Build encapsulated components that manage their state.",
};
const card3 = {
  img: img3,
  title: "Single-Way",
  descripcion: "A set of immutable values are passed to the component's.",
};
const card4 = {
  img: img4,
  title: "JSX",
  descripcion: "Statically-typed, designed to run on modern browsers.",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="App-menu" alt="logo" />
        </div>
        <div>
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <h4>
            You will learn how to use <br /> the most popular frontend library,
            <br /> and become a super Ninja developer.
          </h4>
        </div>
        <button> Awesome!</button>
      </header>
      <body className="cards">
        <Card card={card1} />
        <Card card={card2} />
        <Card card={card3} />
        <Card card={card4} />
      </body>
    </div>
  );
}
export default App;
