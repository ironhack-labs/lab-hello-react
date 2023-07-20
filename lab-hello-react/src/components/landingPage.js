import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';


function LandingPage(){
  return (
    <section>

        <div>
        <img className='image' alt="img1" src={img1}></img>
        </div>

        <div> 
        <img className='image' alt="img2" src={img2}></img>
        </div>
        
        <p>Say hello to</p>
        <p>ReactJS</p>
        <br></br>
        <p>You will learn how to use</p>
        <p>the most popular frontend library</p>
        <p>and become a super Ninja developer.</p>

        <button>Awesome!</button>
        

        <div>
        <img className='image' alt="img3" src={img3}></img>
        <h4>Declarative</h4>
        <h6>React makes it painless to create interactive Uis.</h6>
        </div>

        <div> 
        <img className='image' alt="img4" src={img4}></img>
        <h4>Components</h4>
        <h6>Build encapsulated components that manage their state.</h6>
        </div>
       

        <div>
        <img className='image' alt="img5" src={img5}></img>
        <h4>Single-Way</h4>
        <h6>A set of immutable values are passed to the component's.</h6>
        
        </div>

        <div> 
        <img className='image' alt="img6" src={img6}></img>
        <h4>JSX</h4>
        <h6>Statically-typed, designed to run on modern browsers.</h6>
        </div>
        
     
    </section>
 )
}

export default LandingPage;