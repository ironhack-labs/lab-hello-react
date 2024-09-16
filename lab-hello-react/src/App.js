
import './App.css';
import Button from './button';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <header>
      <div id="menu">
      <img src={logo} className="headerImg"/>
      <img src={menu} className="headerImg"/>
      </div>
      <div id="title">
        <h1 className="whiteText left">Say hello to ReactJS</h1>
        <p className="whiteText left">You will learn hot to use the most popular frontend library, and become a super Ninja developer.</p>
        {Button}
      </div>
      </header>
      <div id="items" className='items'>
        <div className='item'>
          <img src={img1} class="img"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='item'>
          <img src={img2} class="img"/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='item'>
          <img src={img3} class="img"/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the compnents's.</p>
        </div>
        <div className='item'>
          <img src={img4} class="img"/>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
