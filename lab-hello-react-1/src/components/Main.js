import React from 'react'
import './Main.css';
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

export default function Main() {

  return (
      <div className='container'>
        <div className="columns">
          <div className="column">
            <img src={icon1} />
            <h3>Declarative</h3>
            <p>React makes it painles to create interactve UIs.</p>
          </div>
          <div className="column">
            <img src={icon2} />
            <h3>Components</h3>
            <p>Build encapsulated components that mange their state.</p>
          </div>
          <div className="column">
            <img src={icon3}/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="column">
            <img src={icon4} />
            <h3>JSX</h3>
            <p>Statically-typed designed to run on morden browsers.</p>
          </div>
        </div>


      </div>
  )
}