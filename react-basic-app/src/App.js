import ironhackLogo from './images/ironhackLogo.png';
import menuTop from './images/menuTop.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="upper-section">
        <div className="navbar">
          <img src={ironhackLogo} className="ironhack-logo" alt="ironhack logo" />
          <img src={menuTop} className="menu-top" alt="menu logo" />
        </div>
        <h1>Say hello to ReactJS</h1>
        <article>You will learn how to use the most popular frontend library, and become a super Ninja developer.</article>
        <button>Awesome!</button>
      </div>

      <div className="bottom-section">
        <div>
          <img src={icon1} className="bottom-icons" alt="icon1" />
          <h2>Declarative</h2>
          <article>React makes it painless to create interactive Uls.</article>
        </div>
        <div>
          <img src={icon2} className="bottom-icons" alt="icon2" />
          <h2>Components</h2>
          <article>Build encapsulated components that manage their state.</article>
        </div>
        <div>
          <img src={icon3} className="bottom-icons" alt="icon3" />
          <h2>Single-Way</h2>
          <article>A set of immutable values are passed to the component's.</article>
        </div>
        <div>
          <img src={icon4} className="bottom-icons" alt="icon4" />
          <h2>JSX</h2>
          <article>Statically-typed, designed to run on modern browsers.</article>
        </div>
      </div>

    </div>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}