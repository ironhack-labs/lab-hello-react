//Importaciones
import "./App.css";
import menu from "./images/menu-top-xs.png";
import logo from "./images/ironhack-logo-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

//funcion
function App() {
  return (
    <div className="App">
      <div className="mainText">
        <header>
        <div>
        <img src={logo} alt="logo" />
        </div>
        <div>
          <img src={menu} alt="menu" />
          </div>
          
        </header>
        <h1>
          Say hello to <br></br> ReactJS
        </h1>
        <p id="mainText">
          You will learn how to use <br></br> the most popular fontend library,
          <br></br> and become a super Ninja developer.
        </p>
        <div>
          <button>
          Awesome!
          </button>
        </div>
      </div>
      <div className="bottomText">
        <div>
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
    <p>React makes it <br></br> painless to create <br></br>interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated <br></br>components that<br></br> manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of inmutable<br></br> values are passed to <br></br>the component´s.</p>
        </div>
        <div>
          <img src={icon4} alt="icon4" />
          <h3> JSX</h3>
          <p>Statically-typed,<br></br> designed to run on<br></br> modern browers.</p>
        </div>
      </div>
    </div>
  );
}
//exportaciones
export default App;
