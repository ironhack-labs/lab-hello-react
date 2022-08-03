import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const Body =()=>{
return(
    <div className='container-body'>
        <div className='icon1'>
        <img src={icon1}/>
        <h1>Declarative</h1>
        <p>React makes it painless to create<br/> interactive UIs.</p>
        </div>
        <div className='icon2'>
        <img src={icon2}/>
        <h1>Components</h1>
        <p>Build encapsuled<br/>components that<br/> manage their state.</p>
        </div>
        <div className='icon3'>
        <img src={icon3}/>
        <h1>Single-Way</h1>
        <p>A set of immutable<br/> values are passed to<br/> the component's.</p>
        </div>
        <div className='icon4'>
        <img src={icon4}/>
        <h1>JSX</h1>
        <p>Statically-typed,<br/> designed to run on<br/> modern browsers.</p>
        </div>
    </div>
)
}

export default Body;