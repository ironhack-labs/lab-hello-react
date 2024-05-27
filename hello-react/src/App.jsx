import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import './App.css'
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <div id="bodyApp">
      <div className='heading'>
      <NavBar/>
    
      <div className="headingText">
      <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>

      </div>
      <div>
        <span>     </span>

      </div>
        


      </div>
      <div className='icons'>
        <div>
          <img src={icon1} alt="icon Declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon Components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon Single-Way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src={icon4} alt="icon JSX" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
