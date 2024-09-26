// src/App.js


import {NavBar} from './components/NavBar'
import {Main} from './components/Main'
import {Icons} from './components/Icons'

import './App.css';

function App() {
  return (
    <div className="App">

    <header>
<NavBar/>

<Main/>

</header>

<section>
  <Icons/>  
    </section>

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
