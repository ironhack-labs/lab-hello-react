// src/App.jsx
import './App.css';
import Icon from './components/Icon'
import ironhackLogo from  './assets/ironhack-logo-xs.png';
import ironhackMenu from  './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {
  return (
    <div className="App">
      <div className='container1'>
        <div className='container2'>
          <div className='navbar'>
            <img src={ironhackLogo}  />
            <img src={ironhackMenu} style={{ width: 'auto',height: '10px',}} />
          </div>
          <div className='info'>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <button>Awesome!</button>
          </div>
        </div>
      <div className='icons'>
        <div className='iconFlex'>
          <Icon text={icon1} />
          <h5>Declarative</h5>
          <p>React makes it painless to create intercative UIs.</p>
        </div>
        <div className='iconFlex'>
          <Icon text={icon2} />
          <h5>Components</h5>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className='iconFlex'>
          <Icon text={icon3} />
          <h5>Single-Way</h5>
          <p>A set of immutable values are passed to the component´s</p>
        </div>
        <div className='iconFlex'>
          <Icon text={icon4} />
          <h5>JSX</h5>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;