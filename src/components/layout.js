import ironIcon from "../images/ironlogo.png";
import menuIcon from "../images/menu.png";
import declarativeIcon from "../images/icon1.png";
import componentsIcon from "../images/icon2.png";
import singleWayIcon from "../images/icon3.png";
import jsxIcon from "../images/icon4.png";

function Layout() {
  return (
    <div>
      <div className="header">
        <nav>
          <img src={ironIcon} alt="IronhackLogo" id="ironhack-icon" />
          <img src={menuIcon} alt="Menu" id="menu-icon" />
        </nav>
        <div className="head-text">
          <h2>Say hello to ReactJS</h2>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="box-container">
        <div className="container">
          <img src={declarativeIcon} alt="Declarative" id="declarative-icon" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="container">
          <img src={componentsIcon} alt="Components" id="components-icon" />
          <h3>Components</h3>
          <p>Build encapsulated compotnents that manage their state</p>
        </div>
        <div className="container">
          <img src={singleWayIcon} alt="Single-Way" id="singleWay-icon" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="container">
          <img src={jsxIcon} alt="JSX" id="jsx-icon" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
