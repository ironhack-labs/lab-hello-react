// src/App.jsx
import './App.css';

import Button1 from "./components/Button1";
import Navbar from "./components/Navbar";
import Icon1 from "./assets/icon1.png";
import Icon2 from "./assets/icon2.png";
import Icon3 from "./assets/icon3.png";
import Icon4 from "./assets/icon4.png";


function App() {
  return (
    <div className="App">
    <>
      
      <section className='first-section'>
      <Navbar />
      <h1 className='hello'>
        Say hello to
        <br/>
        ReactJS
      </h1>
      <p className='paragraph'>You will learn how to use 
        the most popular frontend library,
        and become a super Ninja developer.</p>
      <Button1 />
      </section>

      <section className="icon-section"> 
        <div className='one-icon'>
          <img src={Icon1} alt="icon 1"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='one-icon'>
          <img src={Icon2} alt="icon 2"/>
          <h3>Componenets</h3>
          <p>Build encapsulated componennts that mange their state</p>
        </div>
        <div className='one-icon'>
          <img src={Icon3} alt="icon 3"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className='one-icon'>
          <img src={Icon4} alt="icon 4"/>
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </section>
    </>
    </div>
  );
}

export default App;