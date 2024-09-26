import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import iconOne from './images/icon1.png'
import iconTwo from './images/icon2.png'
import iconThree from './images/icon3.png'
import iconFour from './images/icon4.png'

function App() {
  return (

    <div className="App">
      <hr />
      
      <nav>
      <img id='nav-logo-img' src={ironhackLogo} alt="ironhack logo" />
      <img id='nav-menu-img' src={menuTop} alt="ironhack logo" />
      </nav>

      <div id="header">

        <h1 id="title">Say hello to ReactJS</h1>

        <p id="explanation">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>

        <button>
          Awesome!
        </button>
      </div>

      <div id="cards">
        <div className="card">
          <img className='icon' src={iconOne} alt="iconOne" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="card">
          <img className='icon' src={iconTwo} alt="iconTwo" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="card">
          <img className='icon' src={iconThree} alt="iconThree" />
          <h3>Single-Way</h3>
          <p>A set of immutable components are passed to the components.</p>
        </div>

        <div className="card">
          <img className='icon' src={iconFour} alt="iconFour" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>

      </div>

    </div>
    
  );
}
export default App;
