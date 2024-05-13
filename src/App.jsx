// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="board">
        <div id="topImages">
          <img id="ironLogo" src="src\assets\ironhack-logo-xs.png" alt="ironhack-logo" />
          <img id="menuSelecter" src="src\assets\menu-top-xs.png" alt="menu-selecter" />
        </div>
        <div id="boardText">
          <h1>Say hello to ReactJS</h1>
          <div id="smallBoardText">
          <h5>You will learn how to use</h5>
          <h5>the most popular frontend library,</h5>
          <h5>and become a super Ninja developer.</h5>
          </div>
          <button>Awesome!</button>
        </div>
      </div>
      <div id="bottomImages">
        <div>
          <img src="src\assets\icon1.png" alt="declarative-icon" />
          <h2>Declarative</h2>
          <h5>React makes it painless to create interactive UIs.</h5>
        </div>
        <div>
          <img src="src\assets\icon2.png" alt="components-icon" />
          <h2>Components</h2>
          <h5>Build encapsulated components that manage their state.</h5>
        </div>
        <div>
          <img src="src\assets\icon3.png" alt="single-way-icon" />
          <h2>Single-Way</h2>
          <h5>A set of inmutable values are passed to the component's.</h5>
        </div>
        <div>
          <img src="src\assets\icon4.png" alt="JSX-icon" />
          <h2>JSX</h2>
          <h5>Statically-typed designed to run on modern browsers.</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
