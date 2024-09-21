import { useState } from "react";
import "./App.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuImg from "./assets/menu-top-xs.png";

function App() {
  return (
    <div className="app">
      <div className= "heading">
        <nav>
          <img id="nav-logo" src={ironhackLogo} alt="logo" />
          <img src={menuImg} alt="menu-icon" />
        </nav>
        
        <h1>Say hello to <br />ReactJS</h1>
        <h2>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h2>
        <p className="label">Awesome!</p>
      </div>
      <section>
        <article>
          <img src={icon1} alt="" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article>
          <img src={icon2} alt="" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
          <img src={icon3} alt="" />
          <h2>Single-Way</h2>
          <p>A set of inmutable values are passed to the component´s.</p>
        </article>
        <article>
          <img src={icon4} alt="" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>

      </section>
    </div>
  );
}

export default App;
