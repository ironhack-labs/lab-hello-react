import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import ironhacklogo from "./images/ironhack-logo-xs.png";
import hamburguer from "./images/menu-top-xs.png";
import item1 from "./images/icon1.png";
import item2 from "./images/icon2.png";
import item3 from "./images/icon3.png";
import item4 from "./images/icon4.png";

function App() {
  return (
    <div className="padding">
      <div className="navbar">
        <img
          src={ironhacklogo}
          alt="example"
          className="navbar-col navbar-item"
        />
        <img
          src={hamburguer}
          alt="example"
          className="navbar-col-right navbar-item navbar-item-small "
        />
      </div>
      <div className="hero">
        <div className="hero2">
          <h1 style={{ margin: 0 }}>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            becoming a super Ninja developer.
          </p>

          <btn className="button">Awesome!</btn>
        </div>
      </div>
      <div className="row">
        <div>
          <img className="item-img" src={item1} alt="example" />
          <p className="item-title">Item 1</p>
    <p className="item-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
        </div>
        <div>
          <img className="item-img" src={item2} alt="example" />
          <p className="item-title">Item 2</p>
    <p className="item-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
        </div>
        <div>
          <img className="item-img" src={item3} alt="example" />
          <p className="item-title">Item 3</p>
    <p className="item-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
        </div>
        <div>
          <img className="item-img" src={item4} alt="example" />
          <p className="item-title">Item 4</p>
    <p className="item-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
        </div>
      </div>
    </div>
  );
}
export default App;
