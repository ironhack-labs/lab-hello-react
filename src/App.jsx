import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  

  return (
    <div className="App">

      <div className='box'>
          <nav className='nav'>
            <img className='imgNav' src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="" />
            <img className='imgNav' src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="" />
          </nav>

          <div id='text' >
            <h1>Say hello to reactJS</h1>
            <p className='parag'>You will learn how to use</p>
            <p className='parag'>the most popular frontend library</p>
            <p className='parag'>and become a super Ninja developer</p>
          </div>

          <div id='btn'>
            <button>Awesome</button>
          </div>

          
      </div>

      <div className='second'>
            <div className='text2'>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div className='text2'>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state</p>
            </div>

            <div className='text2'>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component´s</p>
            </div>

            <div className='text2'>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="" />
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers</p>
            </div>
      </div>

      

    </div>
  )
}

export default App
