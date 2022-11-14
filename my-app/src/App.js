// src/App.js
import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhackLogoXs from './images/ironhack-logo-xs.png';
import menuTopXs from './images/menu-top-xs.png';

function App() {
  return (
    <div className="App">
      
     
        <div className="Logo-app">
          <img src={ironhackLogoXs} alt="ironhack logo" />
          <img src={menuTopXs} alt="menuTop" />
        </div>
      <div className="App-header">
        <h1>Say hello to REACTJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <button type="button">Awesome!</button>
      </div>
      <div className="functions">
        <div>
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it<br></br> painless to create<br></br> interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt="icon 2" />
          <h2>Components</h2>
          <p>Build encapsulated<br></br> components that manage<br></br> their state</p>
        </div>
        <div>
          <img src={icon3} alt="icon 3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values<br></br> are passed to the <br></br>components</p>
        </div> 
        <div>
          <img src={icon4} alt="icon 4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed <br></br>to run on modern<br></br> browsers</p>
        </div>
      </div>
    </div>
  );
}
export default App;
