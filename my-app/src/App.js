import './App.css';
import Ironhack from "./images/ironhack-logo-xs.png"
import Menu from "./images/menu-top-xs.png"
import Icon1 from "./images/icon1.png"
import Icon2 from "./images/icon2.png"
import Icon3 from "./images/icon3.png"
import Icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <nav className='navbar'>
            <img src={Ironhack} alt=""/>
            <div>
              <img src={Menu} alt=""/>
            </div>
        </nav>

        <>
          <h1>Say Hello to <br/>
          ReactJS</h1>
          <p>You will learn how to use <br/>
          the most popular frontend library <br/>
          and become a super Ninja developer</p>
          <button className="btn">Awesome!</button>
        </>
      </div>
      <div  className='icons-container'>
        <div>
          <img src={Icon1} alt=""/>
          <h2> Declarative </h2>
          <p>React makes it painless to create interactive Uls</p>
        </div>
        <div>
          <img src={Icon2} alt=""/>
          <h2> Components </h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={Icon3} alt=""/>
          <h2> Single-Way </h2>
          <p> A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={Icon4} alt=""/>
          <h2> JSX </h2>
          <p>Statically typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
