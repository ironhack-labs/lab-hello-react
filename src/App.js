import logo from './logo.svg';
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
      <section className='sec1'>
        <div className=''>
        
            <nav className='navbar'>
              <img id='logo'src={Ironhack} alt="logo" />
              <img id='menu'src= { Menu } alt="menu" />
            </nav>
  
        </div>
        <div>
            <h1>Say hello to ReactJS</h1>
              <p> You will learn how to use <br></br>the most popular frontend
              library, <br></br>and become a super ninja developer.</p>

              <button>Awsome!</button>
        </div>
      </section>
      <section className='sec2'>
        <div >
           <img src={Icon1} alt='griffin'/>
           <h2>Declarative</h2>
           <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
           <img src={Icon2} alt='laptop'/>
           <h2>Components</h2>
           <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
           <img src={Icon3} alt='desktop'/>
           <h2>Single-Way</h2>
           <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
           <img src={Icon4} alt='code'/>
           <h2>JSX</h2>
           <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>

  );
}

export default App;
