import './App.css'
import logo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png';
import icon1 from './assets//icon1.png';
import icon2 from './assets//icon2.png';
import icon3 from './assets//icon3.png';
import icon4 from './assets//icon4.png';

function App() {

  return (
    <>
      <div className='body'>
        <div className="black">
          <nav>
            <img src={logo} alt="logo" />
            <img className='menu' src={menu} alt="menu icon" />
          </nav>
          <div className='text'>
            <h1>Say hello to ReactJS</h1>
            <p className='heroText'>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          </div>
          <div>
            <button>Awesome!</button>
          </div>
        </div>
        <div className="white">
          <div className="item1">
            <img src={icon1} alt="icon 1" />
            <h1>Declarative</h1>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="item2">
            <img src={icon2} alt="icon 2" />
            <h1>Components</h1>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="item3">
            <img src={icon3} alt="icon 3" />
            <h1>Single-way</h1>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="item4">
            <img src={icon4} alt="icon 4" />
            <h1>JSX</h1>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
