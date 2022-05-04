// src/App.js
import icon from './images/icon.png';
import ironhack from './images/ironhack.png';
import laptop from './images/laptop.png';
import mac from './images/mac.png';
import webpage from './images/webpage.png';
import wrench from './images/wrench.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
      <div>
        <div alt="hero" className="hero-container">
          <div>
            <nav className="navbar">
              <div>
                <img src={ironhack} alt="ironhack icon" className='ironhack-logo'/>
              </div>
              <div>
                <img src={icon} alt="nav bar icon" className='hamburger-logo'/>
              </div>
            </nav>
          </div>
          <div>
            <h1 className='hero-title'>
              <div>Say hello to</div> 
              <div>ReactJS</div>
            </h1>
            <p className='hero-text'>
              You will learn how to use<br />
              the most popular frontend library,<br /> 
              and become a super Ninja developer. </p>
            <button>  
              Awesome!
            </button>
          </div>
          <div>
            <img src={logo} alt="logo icon" className="my-logo0"/>
          </div>
          <div>
            <img src={logo} alt="logo icon1" className="my-logo1"/>
          </div>
          <div>
            <img src={logo} alt="logo icon2" className="my-logo2"/>
          </div>
          <div>
            <img src={logo} alt="logo icon3" className="my-logo3"/>
          </div>
          <div>
            <img src={logo} alt="logo icon4" className="my-logo4"/>
          </div>
          <div>
            <img src={logo} alt="logo icon5" className="my-logo5"/>
          </div>
        </div>
      </div>
    </div>
      <div>
        <img src={wrench} alt="wrench icon" />
        <img src={laptop} alt="laptop icon" />
        <img src={mac} alt="mac icon" />
        <img src={webpage} alt="webpage icon" />


      </div>
    </div>
  );
}

export default App;