// src/App.jsx
import './App.css';
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";


function App() {
  return (
    <div className="App">
      <div class="main-body">
        <div class="nav-bar">
          <img src={ironhackLogo} alt="ironhack-logo"/>
          <img src={menuTop} alt="menu-top"/>
        </div>
        <div class="middle-part">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use
            <br/>the most popular frontend library, 
            <br/>and become a super Ninja developer</p>
            <button>Awesome!</button>
        </div>
      </div>
      <div class="images-with-text">
        <article class="firstOne">
        <img src={icon1} alt="icon1"/>
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article class="firstOne">
        <img src={icon2} alt="icon2"/>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
        </article>
        <article class="firstOne">
        <img src={icon3} alt="icon3"/>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
        </article>
        <article class="firstOne">
        <img src={icon4} alt="icon4"/>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers</p>
        </article>
      </div>
    </div>
  );
}

export default App;