// src/App.js
import './App.css';
import ironhackLogo from './images/ironhacklogo.png';
import dropDown from "./images/dropdown.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";




function App() {
  return (
    <div className="App">
   
        <nav className='nav'>
            <img src={ironhackLogo} alt=""/>
            
              <img src={dropDown} alt=""/>
            
        </nav>
        <header className='App-header'>
          <h1>Say Hello to <br/>
          ReactJS</h1>
          <p>You will learn how to use <br/>
          the most popular frontend library <br/>
          and become a super Ninja developer</p>
          <button className="btn">Awesome!</button>
        </header>
      
      <div  className='cards'>
        <div>
          <img src={icon1} alt=""/>
          <h2> Declarative </h2>
          <p>React makes it painless to create interactive Uls</p>
        </div>
        <div>
          <img src={icon2} alt=""/>
          <h2> Components </h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt=""/>
          <h2> Single-Way </h2>
          <p> A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4} alt=""/>
          <h2> JSX </h2>
          <p>Statically typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;