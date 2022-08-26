import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='principal'>
          <nav class="navbar bg-light" className='navbar'>
            <div class="container-fluid">
              <img src={logo} alt="" class="d-inline-block align-text-top"/>
              <img src={menu} alt="" class="d-inline-block align-text-top"/>
            </div>
            <div>
              
            </div>
         </nav>
        <div className='div-1'>
          <div className='welcome'>
            <h1>Say hello to ReactJS</h1>
            <p> You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button className='button-welcome'><strong>Awesome!</strong></button>
          </div>
        </div>
      </div>
        <div className='div-cards'>
          <div class="card" className='card'>
            <img src={icon1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Declarative</h5>
              <p className='card-text' class="card-text">React makes it painless to create interactive UIs.</p>
            </div>
          </div>
          <div class="card" className='card'>
            <img src={icon2} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Components</h5>
              <p className='card-text' class="card-text">Build encapsulated components that manage their state.</p>
            </div>
          </div>
          <div class="card" className='card'>
            <img src={icon3} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Single-Way</h5>
              <p className='card-text' class="card-text">A set of immutable values are passed to the component's.</p>
            </div>
          </div>
          <div class="card" className='card'>
            <img src={icon4} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">JSX</h5>
              <p className='card-text' class="card-text">Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
