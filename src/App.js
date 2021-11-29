import Headline from './components/Headline';
import Button from './components/Button';

import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img id="img1" src={logo} alt="" height="50px" />
        <img id="img2" src={menu} alt="" height="20px" />
      </div>
      <div className="App-header">
        <Headline />

        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>

        <Button />
      </div>

      <div className="AllCards">
        <div className="Card">
          <img src={icon1} alt="" />
          <h5>Declarative</h5>
          <p>React makes ir painless to create interactive UIs.</p>
        </div>
        <div className="Card">
          <img src={icon2} alt="" />
          <h5>Components</h5>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="Card">
          <img src={icon3} alt="" />
          <h5>Single-Way</h5>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="Card">
          <img src={icon4} alt="" />
          <h5>JSX</h5>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
