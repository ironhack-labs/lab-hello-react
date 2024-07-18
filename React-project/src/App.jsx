import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

import './mycss.css'
//import './App.css'


function App() {

  return (
    <div className='App'>
      <section id='Intro'>
        <nav>
          <img src={logo}></img>
          <img src={menu}></img>
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use 
        the most popular frontend library, 
        and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </section>
      
      <section>
        <div>
          <img src={icon1}></img>
          <h1>Declarative</h1>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2}></img>
          <h1>Components</h1>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3}></img>
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4}></img>
          <h1>JSX</h1>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
      
      
      
      
    </div>
  )
}

export default App
