import React from 'react';
import '../body/body.css'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'

function Body() {
  return (
    <div className='card-container'>
        <div className='card'>
        <img src={icon1} className='card-img' alt="card1" />
        <h3 className='card-title'>Declarative</h3>
        <p className='card-text'>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='card'>
        <img src={icon2} className='card-img' alt="card2" />
        <h3 className='card-title'>Components</h3>
        <p className='card-text'>Build encapsulated components that manage their state.</p>
        </div>
        <div className='card'>
        <img src={icon3} className='card-img' alt="card3" />
        <h3 className='card-title'>Single-Way</h3>
        <p className='card-text'>A set of immutable values are passed to the component's.</p>
        </div>
        <div className='card'>
        <img src={icon4} className='card-img' alt="card4" />
        <h3 className='card-title'>JSX</h3>
        <p className='card-text'>Statically-typed, designed to run on modern browsers.</p>
        </div>
        </div>
    );
}

export default Body
