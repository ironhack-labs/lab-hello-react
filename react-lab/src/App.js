import React from 'react'
import './App.css';

import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="nav">
          <img className="nav-item App-logo"src={img1} alt="logo" />
          <img className="nav-item"src={img2} alt="menu" />
        </div>
        <div className="main-container">
          <h1>Say hello to ReactJS</h1>
          <p> You will learn how to use the most popular frontend library,
            and become super Ninja developer!</p>
          <button> Awesome!</button>
        </div>
      </div>
      <div className="info-container">
        <div className="info">
         <img src={img3} alt="icon"/>
         <h3> Declarative </h3>
         <p> React makes it painless to create interactive UIs</p>
        </div>
        <div className="info">
         <img src={img4} alt="icon"/>
         <h3>Components</h3>
         <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="info">
         <img src={img5} alt="icon"/>
         <h3>Single way</h3>
         <p>A set of immutable values are passed to the components</p>
        </div>
        <div className="info">
        <img src={img6} alt="icon"/>
        <h3>JSX</h3>
        <p>Statically typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
