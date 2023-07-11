import "./App.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";
function App() {
  return (
    <div>
      <div className="intro">
        <nav>
          <li>
            <img src={ironhackLogo} alt="Iron Hack Logo" />
          </li>
          <li>
            <img src={menuTop} alt="menu top img" />
          </li>
        </nav>
        <h1>
          Say hello to <br />
          ReactJS
        </h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer
        </p>
        <button className="awesome-button">Awesome!</button>
      </div>
      <div className="empty"></div>
      <div className="container">
        <div className="advantages">
          <div className="declarative">
            <img src={icon1} alt="" />
            <h4>Declarative</h4>
            <p class="desc">
              React makes it <br />
              painless to create <br />
              interactive UIs
            </p>
          </div>
          <div className="components">
            <img src={icon2} alt="" />
            <h4>Components</h4>
            <p class="desc">
              Build encapsulated <br /> components that <br /> manage their
              state.
            </p>
          </div>
          <div className="single-way">
            <img src={icon3} alt="" />
            <h4>Single-Way</h4>
            <p class="desc">
              A set of immutable <br />
              values are passed to <br /> the components
            </p>
          </div>
          <div className="jsx">
            <img src={icon4} alt="" />
            <h4>JSX</h4>
            <p class="desc">
              Statically-typed,
              <br />
              designed to run on <br />
              modern browsers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
