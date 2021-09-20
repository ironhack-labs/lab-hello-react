import logo from './images/ironhack-logo-xs.png';
import menuButton from './images/menu-top-xs.png';
import declarative from './images/icon1.png';
import components from './images/icon2.png';
import singleWay from './images/icon3.png';
import jsx from './images/icon4.png';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className="App-top-page">
  
        <div className="Nav-bar">
          <img src={logo} />
          <img src={menuButton} />
        </div>

        <div className="App-Intro-Box">
          <h1>Say hello to ReactJS</h1>
          <h4>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h4>
          <button>Awesome!</button>
        </div>

      </div>

      <div className="App-bottom-page">

        <div className="App-bottom-container">
          <img src={declarative} />
          <h2>Declarative</h2>
          <h4>React makes it painless to create interactive UIs.</h4>
        </div>

        <div className="App-bottom-container">
          <img src={components} />
          <h2>Components</h2>
          <h4>Build encapsulated components that manage their state.</h4>
        </div>

        <div className="App-bottom-container">
          <img src={singleWay} />
          <h2>Single-Way</h2>
          <h4>A set of immutable values are passed to the component's.</h4>
        </div>

        <div className="App-bottom-container">
          <img src={jsx} />
          <h2>JSX</h2>
          <h4>Statically-typed designed to run on modern browsers.</h4>
        </div>

      </div>

    
    </div>
  );
}

export default App;
