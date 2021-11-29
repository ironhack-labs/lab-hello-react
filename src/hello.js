import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const Hello = () => {
  return (
    <div>
      <div className="hello-txt">
        <nav>
          <img src={logo} alt="" />
          <img src={menu} alt="" />
        </nav>
        <div className="txt-and-btn">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja Developer.
          </p>
          <button> Awesome! </button>
        </div>
      </div>
      <div className="second-part">
        <div className="card">
          <img src={icon1} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interective UIs.</p>
        </div>

        <div className="card">
          <img src={icon2} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="card">
          <img src={icon3} alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="card">
          <img src={icon4} alt="" />
          <h3>JSX</h3>
          <p>Statucally-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
