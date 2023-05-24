import './App.css';
import logoImg from "./images/ih-logo.png";
import menuIcon from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";


function App() {
  return (
    <div className="App">
      <div id="top-container">
        <div id="navbar">
          <img src={logoImg} alt="logo"/>
          <img src={menuIcon} alt="menu"/>
        </div>
        <div id="text-and-button">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>

      </div>
      <div id="bottom-container">
        <div className="icon-card">
          <img src={icon1} alt="icon1"/>
          <h5>Declarative</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas consequat ullamcorper. </p>
        </div>
        <div className="icon-card">
          <img src={icon2} alt="icon2"/>
          <h5>Components</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas consequat ullamcorper. </p>
        </div>
        <div className="icon-card">
          <img src={icon3} alt="icon3"/>
          <h5>Single-Way</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas consequat ullamcorper. </p>
        </div>
        <div className="icon-card">
          <img src={icon4} alt="icon4"/>
          <h5>JSX</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas consequat ullamcorper. </p>
        </div>

      </div>
     
    </div>
  );
}

export default App;
