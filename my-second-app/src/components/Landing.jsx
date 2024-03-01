import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Landing = () => {
  return (
    <div id="container">
      <div id="hero">
        <div id="top">
          <div id="nav-bar">
            <img id="nav-left" src={logo} alt="logo" />
            <img id="nav-right" src={menu} alt="menu" />
          </div>

          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p>
            You will learn how to use <br /> the most popular frontend library,
            <br /> and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
        <div id="bottom">
          <div id="icons">
            <div>
              <img id="icon1" src={icon1} alt="icon1" />
              <div className="text-container">
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
              </div>
            </div>
            <div>
              <img id="icon2" src={icon2} alt="icon2" />
              <div className="text-container">
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state</p>
              </div>
            </div>
            <div>
              <img id="icon3" src={icon3} alt="icon3" />
              <div className="text-container">
                <h2>Single-Way</h2>
                <p>A set of inmutable values are passed to the component´s</p>
              </div>
            </div>
            <div>
              <img id="icon4" src={icon4} alt="icon4" />
              <div className="text-container">
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
