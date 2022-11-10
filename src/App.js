import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuTop from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <div className='container' >
        <div className>
          <nav className = 'menu'>
            <img className='logo' src={ironhackLogo} alt='Logo Ironhack'></img>
            <img className='Topmenu' src={menuTop} alt='Menu topo'></img>
          </nav>
        </div>
        <div className='mainTitle'>
          <h1>Say hello to <br>
          </br>ReactJS</h1>
          <p className='info' >You will learn how to use <br>
          </br>the most popular frontend library, <br>
          </br>and become a super ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </div>

      <div className='section2'>
        <div className='info'>
          <img src={icon1} alt='Declarative Icon'></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='info'>
          <img src={icon2} alt='Components Icon'></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='info'>
          <img src={icon3} alt='Single-Way Icon'></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className='info'>
          <img src={icon4} alt='JSX'></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
        
      </div>
    </div>

    
  );
}

export default App;
