import React from 'react';
import icon1 from '../src/images/icon1.png';
import icon2 from '../src/images/icon2.png';
import icon3 from '../src/images/icon3.png';
import icon4 from '../src/images/icon4.png';
import ironlogo from '../src/images/ironhack-logo-xs.png';
import ironmenu from '../src/images/menu-top-xs.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <img className="iron" src={ironlogo} alt="image" />
          <img className="ironmenu" src={ironmenu} alt="image" />
        </div>

        <h1>Say hello to ReactJS</h1>
        <h5>You will learn how to use the most popular libary, and become a super Ninja developer.</h5>

        <button>Awsome</button>

      </header>

      <footer className="footer">
      
      <div>
        <img src={icon1} alt="image" />;
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UI's.</p>
      </div>

      <div>
        <img src={icon2} alt="image" />;
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div> 
        <img src={icon3} alt="image" />;
        <h2>Single-Way</h2>
        <p>A set of immutable values are passive to the component's.</p>
      </div>  
      
      <div>
        <img src={icon4} alt="image" />;
        <h2>JSX</h2>
        <p>Statically typed design to run on modern browsers.</p>
      </div>

      </footer>
      
    </div>
  );
}

export default App;
