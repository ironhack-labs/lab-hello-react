import './App.css';
import logo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {

  return (
    <div className='app'>
      
      <div className='main'>
        <nav>
          <div><img src={logo}/></div>
          <div><img src={menu}/></div>
        </nav>
        <div className='content'>
          <h1>Say hello to<br/>ReactJS</h1>
          <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</p>
          <span>Awesome!</span>
        </div>
      </div>
      
      <div className='react'>
        <section>
          <div><img src={icon1}/></div>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </section>
        <section>
          <div><img src={icon2}/></div>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </section>
        <section>
          <div><img src={icon3}/></div>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </section>
        <section>
          <div><img src={icon4}/></div>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </section>
      </div>

    </div>
  );
}

export default App;