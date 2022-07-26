// src/App.js

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import ironLogo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'

import './App.css';

function App() {
  return (
    <div className="App">
     <img src={ironLogo}  alt="ironLogo" />
<img src={menu}  alt="menu" />
    <img src={icon1}  alt="icon1" />
    <img src={icon2}  alt="icon2" />
    <img src={icon3}  alt="icon3" />
    <img src={icon4}  alt="icon4" />
    </div>
  );
}
export default App; 



/* import icon1 from './images/icon1.png'
 import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={icon1} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;  */
