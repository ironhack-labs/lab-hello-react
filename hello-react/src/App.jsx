
import './App.css'
import iconFirst from './assets/icon1.png'
import iconSecond from './assets/icon2.png'
import iconThird from './assets/icon3.png'
import iconFourth from './assets/icon4.png'
import menuTop from './assets/menu-top-xs.png'
import ironhackLogo from './assets/ironhack-logo-xs.png'
import reactLogo from './assets/react.svg'

function App() {

  return (
    
    <div className='App'>
        <div id="introduction-div">
          <div id="navbar">
            <img src={ironhackLogo} alt="ironhack-logo"></img>
            <img src={menuTop} alt="menu"></img>
          </div>
          <h1>Say hello to <br></br> ReactJS</h1>
          <p>You will learn how to use <br></br> the most popular frontend library, <br></br> and become a super Ninja developer.</p>
          <button>Awesome!</button>
          {/* <div className="react-logo-container">
            <img src={reactLogo} alt="logo" className="logo big"></img>
            <img src={reactLogo} alt="logo" className="logo big"></img>
            <img src={reactLogo} alt="logo" className="logo big"></img>
            <img src={reactLogo} alt="logo" className="logo small"></img>
            <img src={reactLogo} alt="logo" className="logo small"></img>
            <img src={reactLogo} alt="logo" className="logo small"></img>
          </div> */}
        </div>
        <div id="react-info-total">
          <div className="react-info-box">
            <img src={iconFirst} alt="logo-of-declarative"></img>
            <h4>Declarative</h4>
            <p>React makes it <br></br> painless to create <br></br> interactive UIs.</p>
          </div>
          <div className="react-info-box">
            <img src={iconSecond} alt="logo-of-components"></img>
            <h4>Components</h4>
            <p>Build encapsulated <br></br> components that <br></br> manage their state.</p>
          </div>
          <div className="react-info-box">
            <img src={iconThird} alt="logo-of-singleway"></img>
            <h4>Single-Way</h4>
            <p>A set of immutable <br></br> values are passed to <br></br> the component´s.</p>
          </div>
          <div className="react-info-box">
            <img src={iconFourth} alt="logo-of-jsx"></img>
            <h4>JSX</h4>
            <p>Statically-typed, <br></br> designed to run on <br></br> modern browsers.</p>
          </div>
        </div>
    </div>
  )
}

export default App
