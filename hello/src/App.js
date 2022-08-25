
import './App.css';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
function App() {
  return (
    <div className="App">
      <header className='logo-menu'>
        <div className='logo'>
        <img src={logo}/>
        </div>
        <div className='menu'>
        <img src={menu} />
        </div>
      </header>
      <div className='body'>
        <div className='sayHello'>
          <h1>Say hello to</h1>
          <h1> ReactJS</h1>
        </div>
        <div className='text'>
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p> 
        <p>and become a super Ninja developer.</p>
        </div>
        <div className='button'>
          <button id='awesome'>Awesome!</button>
        </div>
      </div>
      <footer className='icons'>
        <div className='icon1'>
          <img src={icon1} />
          <h1>Declarative</h1>
          <p>React makes it painless to create interactive UIs.</p> 
        </div>
        <div className='icon2'>
          <img src={icon2} />
          <h1>Components</h1>
          <p>Build encapsulated components that manage their state.</p> 
        </div>
        <div className='icon3'>
          <img src={icon3} />
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to the component's.</p> 
        </div>
        <div className='icon4'>
          <img src={icon4} />
          <h1>JSX</h1>
          <p>Staticallu-typed, designed to run on modern browsers.</p> 
        </div>
      </footer>
    </div>
  );
}

export default App;
