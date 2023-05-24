import Header from "./components/Headline";
import Button from "./components/Button";

import iron from "./imagenes/iron.png";
import icon from "./images/icon.png";
import logo1 from "./imagenes/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img id="img1" src={iron} alt="" height="50px" />
        <img id="img2" src={icon} alt="" height="20px" />
      </div>
      <div className="App-header">
        <Header />

        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>

        <Button />
      </div>
      <div className="AllImagens">
        <div className="imagen">
          <img src={logo1} alt="" />
          <h5>Declarative</h5>
          <p>React makes ir painless to create interactive UIs.</p>
        </div>
        <div className="imagen">
          <img src={logo2} alt="" />
          <h5>Components</h5>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="imagen">
          <img src={logo3} alt="" />
          <h5>Single-Way</h5>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="imagen">
          <img src={logo4} alt="" />
          <h5>JSX</h5>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
