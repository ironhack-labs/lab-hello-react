import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuTop from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'


function App() {
  return (
    <div className="App">
      <section className='blueSection'>
        <nav className='navBar'>
          <img className='ironhackLogo' src={ironhackLogo} alt='ironhack-logo' />
          <img className='menuTop' src={menuTop} alt='menu-top'/>
        </nav>
        <div className='hero'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and to become a super ninja developer</p>
          <button>Awesome!</button>
        </div>
      </section>
      <section className='description'>
        <div>
          <img src={icon1} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
        <img src={icon2} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
        <img src={icon3} alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
        <img src={icon4} alt="" />
          <h3>JSX</h3>
          <p>Statically typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}
export default App;