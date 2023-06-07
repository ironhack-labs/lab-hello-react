import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ironhacklogo from "./assets/ironhacklogo.png"
import bugerbar from "./assets/burgerbar.png"
import code from "./assets/code.png"
import key from "./assets/key.png"
import play from "./assets/play.png"
import settings from "./assets/settings.png"


function App() {
  return (
    <>
    <div className="App"></div>
    <div className='background'>
   <div className='mainImages'> <img className ="logo" src={ironhacklogo} alt="ironhacklogo" />
    <img className ="burgerbar" src={bugerbar} alt="bugerbar" /></div>
    <div className='mainText'>
   <h1>Say hello to <span>ReactJS</span></h1>
   <p className='pmain'>You will learn how to use</p>
    <p className='pmain'>the most popular frontend library,</p>
    <p className="pmain">and become a super Ninja developer.</p>
    <button>Awesome!</button>
    </div>
    </div>
    <div className="container">
        <div className="item">
          <img src={key} alt="key" />
          <h2>Declarative</h2>
          <p className='psecond'>React makes <span> it painless to create</span> interactive UIs.</p>
        </div>
        <div className="item">
          <img src={play} alt="play" />
          <h2>components</h2>
          <p className='psecond'>Build encapsulated <span> components that</span> manage their state.</p>
        </div>
        <div className="item">
          <img src={settings} alt="settings" />
          <h2>Single-Way</h2>
          <p className='psecond'>A set of immutable <span>values are passed to </span>the component's.</p>
        </div>
        <div className="item">
          <img src={code} alt="code" />
          <h2>JSX</h2>
          <p className='psecond'>Statically-typed, <span>designed to run on</span> modern browsers.</p>
        </div>
      </div>
    </>
  );
}
export default App;

