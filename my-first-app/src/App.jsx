import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import icon1 from './assets/icon1.png'; 
import icon2 from './assets/icon2.png'; 
import icon3 from './assets/icon3.png'; 
import icon4 from './assets/icon4.png'; 
import logo from './assets/logo.png';
import menu from './assets/menu.png';


function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <img src={logo} alt="Ironhack Logo" className="logo" />
          <img src={menu} alt="Menu Icon" className="menu" />
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library,
          and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src={icon1} alt="Icon 1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="feature">
          <img src={icon2} alt="Icon 2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="feature">
          <img src={icon3} alt="Icon 3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="feature">
          <img src={icon4} alt="Icon 4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

