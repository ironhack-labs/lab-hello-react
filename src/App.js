import "./App.css";
import ironhackLogo from "./images/logo.png";
import menuIcon from "./images/menu.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-top">
          <img src={ironhackLogo} alt="Ironhack Logo" className="nav-icon" />
          <img src={menuIcon} alt="Menu Icon" className="nav-icon" />
        </div>

        <div className="hero-inner">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library and become a super ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </header>
      <main>
        <div className="card">
          <img src={icon1} alt="Icon 1" />
          <h3>Declarative</h3>
          <p>Description for Icon 1</p>
        </div>
        <div className="card">
          <img src={icon2} alt="Icon 2" />
          <h3>Components</h3>
          <p>Description for Icon 2</p>
        </div>
        <div className="card">
          <img src={icon3} alt="Icon 3" />
          <h3>Single Way</h3>
          <p>Description for Icon 3</p>
        </div>
        <div className="card">
          <img src={icon4} alt="Icon 4" />
          <h3>JSX</h3>
          <p>Description for Icon 4</p>
        </div>
      </main>
    </div>
  );
}
export default App;
