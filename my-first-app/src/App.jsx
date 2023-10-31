// src/App.jsx
import './App.css';
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import ironhack from "./assets/ironhack-logo-xs.png"
import menu from "./assets/menu-top-xs.png"

function App() {
  return (
    <div className="App">
      <div class="main-body">
      <div  class="nav-bar">
        <img src={ironhack}/>
        <img src={menu}/>
      </div>
      <div class="body-bar">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use
          <br/>
          the most popular frontend library,
          <br/>
          and become a Super Ninja developer.
        </p>
        <button id="btn5">Awesome!</button>
        </div>
      </div>
      <div class="allImages">
        <article class="firstOne">
          <img src={icon1} />
            <h3>Declaritive</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article class="firstOne">
        <img src={icon2} />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
        </article>
        <article class="firstOne">
        <img src={icon3} />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
        </article>
        <article class="firstOne">
        <img src={icon4} />
        <h3>JSX</h3>
        <p>Statically-typed. designed to run on modern browsers.</p></article>
      </div>
    </div>
  );
}

export default App;
