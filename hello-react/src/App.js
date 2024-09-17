// src/App.js
import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import bars from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <img className="logo1" src={logo} />
      <img className="bars" src={bars} />
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button>Awesome!</button>
    </div>
  );
}
export default App;
