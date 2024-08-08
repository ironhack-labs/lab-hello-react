import './App.css';
import logo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png'
import feature1 from './assets/icon1.png'
import feature2 from './assets/icon2.png'
import feature3 from './assets/icon3.png'
import feature4 from './assets/icon4.png'

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <img src={logo} alt='logo' style={{marginRight: 'auto'}}></img>
        <img src={menu} alt='menu' style={{marginLeft: 'auto'}}></img>
      </div>
      <div className='main'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </div>
      <div className='features'>
        <div className='feature'>
          <img src={feature1}></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='feature'>
          <img src={feature2}></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='feature'>
          <img src={feature3}></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className='feature'>
          <img src={feature4}></img>
          <h2>JSX</h2>
          <p>Statically-typed. designed to run on modern broswers.</p>
        </div>
      </div>
    </div>
  );

}

export default App
