// src/App.jsx
import './App.css';

import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'


function App() {
  return (
    <div className="App">
      <div className="backgroundTop">
        <div className="navbar" >
          <img src="/ironhack-logo-xs.png" alt="logo IH"/>
          <img src="/menu-top-xs.png" alt="Menu btn"/>
        </div>
        <div className="firstSection">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <a href="#">Awesome</a>
        </div>
      </div>
      <div className="bottom">
        <div className="paragraph">
          <img src="/icon1.png" alt="icon1"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="paragraph">
          <img src={icon2} alt="icon2"/>
          <h2>Components</h2>
          <p>Build encapsulated compnents that manage their state.</p>
        </div>
        <div className="paragraph">
          <img src={icon3} alt="icon3"/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="paragraph">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="icon4"/>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>

      </div>
    </div>
  );
}

export default App;