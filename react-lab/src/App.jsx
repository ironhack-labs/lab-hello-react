import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ironhacklogo from './assets/ironhack-logo-xs.png'
import Menu from './assets/menu-top-xs.png'
import './Component/Ironhack.jsx'
import Ironhack from './Component/Ironhack.jsx'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import Ironhack2 from './Component/Ironhack2.jsx'


function App() {
  return (
    
    <div className="App">
    <section className='Design'>
    <div className='header'>
    <img src = {Ironhacklogo} alt ="Logo" className='logo'/>
    <img src = {Menu} alt ="Menu" className='top-right-image'/>
    </div>
    <Ironhack className="ironhack-component" />
      <button className='button-design'>Awesome!</button>
</section>

    <div>
    <div className='design-comp'>
    <div className="img-container">
      <img src={icon1} alt="Icon1" className="small-img" />
      <h4>Declarative</h4>
      <p>React makes it </p>
      <p>painless to create</p>
      <p>interactive UIs.</p>
    </div>

    <div className="img-container">
    <img src={icon2} alt="Icon2" className='small-img' />
      <h4>Components</h4>
      <p>Build encapsulated </p>
      <p>components that</p>
      <p>manage their state.</p>
    </div>

    <div className="img-container">
    <img src={icon3} alt="Icon3" className='small-img' />
    <h4>Single-Way</h4>
      <p>A set of immutable </p>
      <p>values are passed to</p>
      <p>the component's.</p>
    </div>

    <div className="img-container">
    <img src={icon4} alt="Icon4" className='small-img' />
    <h4>JSX</h4>
      <p>Statically-typed </p>
      <p>designed to run on</p>
      <p>modern browsers.</p>
    </div>

    </div>
   
    </div>
</div>

           
  );
}

export default App;