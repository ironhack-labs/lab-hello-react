import logo from './logo.svg';
import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuLogo from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

// src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="upperPage">

    <div>
    <nav className="navbar">
    <div><img src={ironhackLogo} alt=""/></div>
    <div><img src={menuLogo} alt=""/></div>
    </nav>
    </div>
    
      <div className="text">
        <h1>
          Say hello to ReactJS
        </h1>
        <p>
          You will learn how to use the most popular frontend linrary, and become a super Ninja developer. 
        </p>
        <div>
          <button type="button">Awesome!</button>
        </div>
      </div>
    </div>
    
    <div className='featuresContainer'>
    <div className="card">
        <img src={icon1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Declarative</h4>
          <p className="card-text">React makes it painless to create interactive UIs.</p>
        </div>
      </div>

      <div className="card">
        <img src={icon2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Components</h4>
          <p className="card-text">Build encapsulated components that manage their state.</p>
        </div>
      </div>

      <div className="card">
        <img src={icon3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Single-Way</h4>
          <p className="card-text">A set of immutable values are passed to the componant's.</p>
        </div>
      </div>

      <div className="card">
        <img src={icon4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">'JSX'</h4>
          <p className="card-text">'Statistically-typed, designed to run on modern browsers.'</p>
        </div>
      </div>
    </div>

    </div>
  );
}


export default App;
