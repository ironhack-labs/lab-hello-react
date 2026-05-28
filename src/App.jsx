import { useState } from 'react'
import Menu from './assets/menu-top-xs.png'
import Logo from './assets/ironhack-logo-xs.png'
import Image1 from './assets/icon1.png'
import Image2 from './assets/icon2.png'
import Image3 from './assets/icon3.png'
import Image4 from './assets/icon4.png'

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <div className='bg-cyan-950 flex justify-between items-center w-[90%] m-auto mt-5 h-20'>
        <img className='ml-10 cursor-pointer' src={Logo} alt=''/>
        <img className='h-3 mr-10 cursor-pointer' src={Menu} alt=''/>
      </div>
      <div className='bg-cyan-950 w-[90%] m-auto h-[50vh]'>
        <h1 className='text-amber-50 text-4xl w-[40%] ml-10 pt-15 mb-7.5 font-bold'>
          Say hello to ReactJS
        </h1>
        <p className='text-amber-50 text-md w-[40%] ml-10 mb-10'>You will learn to use the most popular frontend library, and become a super Ninja developer.</p>
        <bbutton className='text-cyan-900 ml-10 bg-amber-50 p-3.5 cursor-pointer font-medium'>Awesome!</bbutton>
      </div>
      <div className='flex justify-evenly mt-20 w-[90%] m-auto mb-40'>
        <div className='w-[20%]'>
          <img src={Image1} alt=''/>
          <h2 className='text-2xl font-medium mb-5'>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='w-[20%] flex flex-col items-start'>
          <img src={Image2} alt=''/>
          <h2 className='text-2xl font-medium mb-5'>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className='w-[20%]'>
          <img src={Image3} alt=''/>
          <h2 className='text-2xl font-medium mb-5'>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className='w-[20%]'>
          <img src={Image4} alt=''/>
          <h2 className='text-2xl font-medium mb-5'>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default App
