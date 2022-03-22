import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mainBody">
        <div className="bodyHeader">
          <img src={logo} alt="logo" className="logoImg" />
          <img src={menu} alt="menu" />
        </div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
      <div className="features">
        <img src={icon1} alt="icon1" />
        <img src={icon2} alt="icon2" />
        <img src={icon3} alt="icon3" />
        <img src={icon4} alt="icon4" />
      </div>
    </div>
  );
}

export default App;
