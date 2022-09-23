import './App.css';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div>
    <div className='top-page'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <img src={menu} alt="menu" />
      </div>
      <div className='top-text'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use </p>
        <p class="sub-p">the most popular frontend library,
        and become a super Ninja developer</p>
        <div className='button'>
        <h4>Awesome!</h4>
        </div>
      </div>
    </div>
    <div className='bottom'>
      <div className='icon'>
        <img src={icon1} alt="icon1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className='icon'>
        <img src={icon2} alt="icon2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className='icon'>
        <img src={icon3} alt="icon3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className='icon'>
        <img src={icon4} alt="icon4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
    </div>
  );
}

export default App;