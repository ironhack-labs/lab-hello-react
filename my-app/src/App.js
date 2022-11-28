import logo from './logo.svg';
import './App.css';
import ironhackLogo from './images/icon1.png'
import menuLines from './images/icon2.png'
import iconThree from './images/icon3.png'
import iconFour from './images/icon4.png'
import iconFive from './images/icon5.png'
import iconSix from './images/icon6.png'


function App() {
  return (
    <>
    <div className="App"></div>
      <div className="container1">
        <nav className="menuImages">
          <img src={ironhackLogo} alt="logo" className="logo"></img>
          <img src={menuLines} alt="menu" className="menuLines"></img>
        </nav>

        <div className='mainText'>
          <h1>Say hello to <br>
          </br>ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <button> <b>Awesome!</b> </button>
        </div>

      </div>

      <div className="features">
        <div className="declarative">
          <img src={iconThree} alt=""></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="components">
          <img src={iconFour} alt=""></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="single-way">
          <img src={iconFive} alt=""></img>
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="jsx">
          <img src={iconSix} alt=""></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </>
  );
}
export default App;