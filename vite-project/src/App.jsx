// src/App.jsx
import './App.css';
import IronhackLogo from "./assets/ironhack-logo-xs.png"; // Import the image file
import MenuTop from "./assets/menu-top-xs.png";
import Icon1 from "./assets/icon1.png";
import Icon2 from "./assets/icon2.png";
import Icon3 from "./assets/icon3.png";
import Icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div id="header">
            <div id="nav-bar">
              <img src={IronhackLogo}/>
              <img src={MenuTop}/>
            </div>

            <div id="center-header">
              <h1>Say hello to <br></br>ReactJS</h1>
              <p>You will learn how to use</p>
              <p>the most popular frontend library,</p>
              <p>and become a super Ninja developer.</p>
              <button type="button">Awesome!</button>
            </div>
      </div>

      <div id="division">
          <div>
            <img src={Icon1}/>
            <h2>Declarative</h2>
            <p>React makes it<br/>painless to create <br/>interactive UIs.</p>
          </div>
          <div>
            <img src={Icon2}/>
            <h2>Components</h2>
            <p>Build encapsulated<br/>components that<br/>manage their state.</p>
          </div>
          <div>
            <img src={Icon3}/>
            <h2>Single-Way</h2>
            <p>A set of immutable<br/>values are passed to<br/>the component's</p>
          </div>
          <div>
            <img src={Icon4}/>
            <h2>JSX</h2>
            <p>Statically-typed,<br/>designed to run on<br/>modern browsers</p>
          </div>


      </div>






    </div>
    
  );
}

export default App;