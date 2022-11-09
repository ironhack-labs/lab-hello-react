import logo from './logo.svg';
import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuLines from './images/menu-top-xs.png';
import iconOne from './images/icon1.png';
import iconTwo from './images/icon2.png';
import iconThree from './images/icon3.png';
import iconFour from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <div className='containerOne'>
      <nav className='menuImages'>
        <img src={ironhackLogo} alt='ironhack logo' className='logo'></img>
        <img src={menuLines} alt='menu lines' className='menuLines'></img>
      </nav>

      <div className='mainText'>
        <h1>Say hello to <br>
        </br>ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super ninja developer.</p>
        <button>Awesome!</button>
      </div>

    </div>

      <div className='features'>
        <div className='declarative'>
          <img src={iconOne} alt="wrench being tighetened"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to reate interactive UIs.</p>
        </div>

        <div className='components'>
          <img src={iconTwo} alt="computer screen and pen"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className='single-way'>
          <img src={iconThree} alt="gear on computer screen"></img>
          <h2>Single-Way</h2>
          <p>A set of imutable values are passed to the component's.</p>
        </div>

        <div className='JSX'>
          <img src={iconFour} alt="3d element"></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>

    </div>
  );
}

export default App;
