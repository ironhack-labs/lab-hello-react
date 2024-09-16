import React from 'react';
import icon1 from "../src/images/icon1.png";
import icon2 from "../src/images/icon2.png";
import icon3 from "../src/images/icon3.png";
import icon4 from "../src/images/icon4.png";
import ironhacklogo from "../src/images/ironhack-logo-xs.png";
import menutop from "../src/images/menu-top-xs.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='bgcolor header'>
        <img className='ironlogo' src={ironhacklogo} alt="ironhacklogo" />
        <img className='menutop' src={menutop} alt="menutop" />
      </header>

      <div className='bgcolor hero'>
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn how to use the most popular frontend library, 
          and become a super ninja developer</h3>
          <button>Awesome!</button>
      </div>

      <div className='elements'>
        <div>
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UI's.</p>
        </div>

        <div>
          <img src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
          <img src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passive to the component's.</p>
        </div>

        <div>
          <img src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p>Statically typed design to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
