import { useState } from 'react'
import ironHackLogo from './assets/ironhack-logo-xs.png';
import navIcon from './assets//menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
        <div className="container">
          <div className="navBar">
            <div className="logoContainer">
              <img src={ironHackLogo} alt="" />
            </div>
            <div className="hamBurgerIcon">
              <img src={navIcon} alt="" />
            </div>
          </div>

          <div className="textContainer">
            <h1>Say Hello to 
              <br />
              ReactJS</h1>
            <p>You will learn how to use
              <br />
               the most popular frontend library,
               <br />
                and become a super Ninja developer</p>

            <button>Awesome!</button>
          </div>
        </div>

        <div className="container2">
       
     
          <div className="card card1">
            <img src={icon1} alt="" />
            <h1>Declarative</h1>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="card card2">
            <img src={icon2} alt="" />
            <h1>Components</h1>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="card card3">
            <img src={icon3} alt="" />
            <h1>Singe-Way</h1>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="card card4">
            <img src={icon4} alt="" />
            <h1>JSX</h1>
            <p>Statically typed designed to run on modern browsers.</p>
          </div>
        </div>
     </div>
    </>

    
  )
}

export default App
