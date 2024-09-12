import React from 'react';
import "./Body.css"

function Body(props) {
  return <div>
      <div className='image-container'>
       <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"/>
        <h2>Declarative</h2>
        <p>React makes it paintless to create interactive UIs</p>
        
        
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"/>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
        
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"/>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components</p>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"/>
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers</p>
        </div>
      </div>

}

export default Body;
