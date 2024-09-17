import "./App.css";
import logo from "./assets/ironhack-logo-xs.png";
import desplegable from "./assets/menu-top-xs.png";

import img1 from "./assets/icon1.png";
import img2 from "./assets/icon2.png";
import img3 from "./assets/icon3.png";
import img4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="pagina">
        <img id="logo" src={logo} alt="logo" />
        <img id="desplegable" src={desplegable} alt="desplegable" />
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library,and become
          a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>

      <div id="images-text">
        <div id="declarative">
          <img src={img1} alt="1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive Uls.</p>
        </div>

        <div id="components">
          <img src={img2} alt="2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div id="single-way">
          <img src={img3} alt="3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div id="jsx">
          <img src={img4} alt="4" />
          <h3>JSX</h3>
          <p>Statically-typed. designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
