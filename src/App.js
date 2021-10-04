import './App.css'
import ironhacklogo from './images/ironhack-logo-xs.png'
import logomenu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <div class="top">
        <img src={ironhacklogo} alt="logo" width="50" height="70" />
        <img src={logomenu} alt="logo" width="50" height="70" />
      </div>
      <div class="palabras">
        <h1>Say hello to </h1>
        <h1>REACTJS</h1>
        <p>You will learn how to use </p>
        <p>the most popular fronted library </p>
        <p>and become a super Ninja Developer </p>
        <button> Awesome!</button>
      </div>

      <div class="Images">
        <div class="logo1">
          <img src={icon1} alt="logo" />
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIS</p>
        </div>
        <div class="logo2">
          <img src={icon2} alt="logo" />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state</p>
        </div>

        <div class="logo3">
          <img src={icon3} alt="logo" />
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the component's</p>
        </div>

        <div class="logo3">
          <img src={icon3} alt="logo" />
          <h4>JSX</h4>
          <p>Statically - typed designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  )
}

export default App
