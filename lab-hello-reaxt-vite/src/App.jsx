// src/App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";

import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import logo from "./assets/ironhack-logo-xs.png";
import menu from "./assets/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar logo={logo} menu={menu} />
        <h1>
          Say hello to<br></br> ReactJS
        </h1>
        <p>
          You will learn how to use <br></br>the most popular frontend library,
          <br></br> and become a super Ninja developer.
        </p>
        <button className="button">Awesome!</button>
      </div>
      <div className="options">
        <Item
          image={icon1}
          title={"Declarative"}
          text={"React makes it painless to create interactive UIs."}
        />
        <Item
          image={icon2}
          title={"Components"}
          text={"React makes it painless to create interactive UIs."}
        />
        <Item
          image={icon3}
          title={"Single-Way"}
          text={"A set of immutable values are passed to the component's."}
        />
        <Item
          image={icon4}
          title={"JSX"}
          text={"Statically-tiped, designed to run on modern browsers."}
        />
      </div>
    </div>
  );
}

export default App;