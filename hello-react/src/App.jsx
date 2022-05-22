// src/App.js
import toolLogo from './images/tool-logo.png';
import pcLogo from './images/pc-logo.png';
import screenLogo from './images/screen-logo.png';
import codeLogo from './images/code-logo.png';
import ironLogo from './images/ironhack-logo.png';
import rightThing from './images/right-thing.png';

import './App.css';

function App() {
  return (
    <div className="App">

    <div>

      <div className="Navbar">
      <img src={ironLogo} alt="ironLogo" width='50' />
      <img src={rightThing} alt="rightThing" width='50' />
      </div>

      <h1>Say hello to ReactJs</h1>
      <p>You will learn how to use <br></br>
      the most popular frontend library <br></br>
      and become a super Ninja developer
      </p>
      <button>Awesome!</button>
    </div>

    <div className="Second-panel">
    
    <div className="element">
      <img src={toolLogo} alt="toolLogo" />
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs
      </p>
    </div>

    <div className="element">
      <img src={pcLogo} alt="pcLogo" />
      <h3>Components</h3>
      <p>React makes it painless to create interactive UIs
      </p>
    </div>

    <div className="element">
      <img src={screenLogo} alt="screenLogo" />
      <h3>Single-Way</h3>
      <p>React makes it painless to create interactive UIs
      </p>
    </div>

    <div className="element">
      <img src={codeLogo} alt="codeLogo" />
      <h3>JSX</h3>
      <p>React makes it painless to create interactive UIs
      </p>
    </div>

    </div>

    </div>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

