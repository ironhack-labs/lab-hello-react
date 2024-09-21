import React from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import "./imageStyle.css"

export default function ImagesSection() {
  return (
    <div className='iconsContainer'>
      <div className='icon1'>
      <img src={icon1} alt="" />
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div className='icon2'>
      <img src={icon2} alt="" />
      <h3>Components</h3>
      <p>Build encapsulated components that manaje their state.</p>

      </div>
     
      <div className='icon3'>
      <img src={icon3} alt="" />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the component's.</p>

      </div>
      
      <div className='icon4'>
      <img src={icon4} alt="" />
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
      
    </div>
  )
}
