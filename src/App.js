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
      <div className="top" style={{backgroundColor: 'darkBlue'}}>
        <div className='nav'>
          <img src={ironhackLogo} alt="" />
          <img className='menuTop' src={menuTop} alt="" />
        </div>
          <div className='heading'>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
            <button className="awesome">Awesome!</button>
          </div>
      </div>

      <div className='section2'>
        <div className='infoDiv'>
        <img src={icon1} alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UI's</p>
        </div>

        <div className='infoDiv'>
        <img src={icon2} alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
        </div>

        <div className='infoDiv'>
        <img src={icon3} alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's</p>
        </div>

        <div className='infoDiv'>
        <img src={icon4} alt="" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
 