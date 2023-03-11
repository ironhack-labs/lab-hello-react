import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <img src={process.env.PUBLIC_URL + 'ironack-logo-xs.png'} alt='logo' className='logo-image'/>
  <img src={process.env.PUBLIC_URL + 'menu-top-xs.png'} alt='menu' className='menu-image' />
        <div className="left-align">
          <h1 className="big-text">Say hello to<br />ReactJs</h1>
          <p>You will learn how to use <br /> the most popular frontend library,<br /> and become a super ninja developer</p>
          <button className="big-white-button">Awesome!</button>
        </div>
      </header>
      <div className="image-grid">
        <div>
          <img src={process.env.PUBLIC_URL + 'icon1.png'} alt="Image 1" />
          <h1>Declarative</h1>
          <p>React makes it <br />painless to create <br /> interactive UIs. </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + 'icon2.png'} alt="Image 2" />
          <h1>Components</h1>
          <p>Build encapsulated <br /> components that <br /> manage their state. </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + 'icon3.png'} alt="Image 3" />
          <h1>Single-Way</h1>
          <p>A set of immutable <br /> values are passed to <br /> the component's. </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + 'icon4.png'} alt="Image 4" />
          <h1>JSX</h1>
          <p>Statically-typed, <br /> design to run on <br /> modern browsers. </p>
        </div>
      </div>
    </div>
  );
}

export default App;