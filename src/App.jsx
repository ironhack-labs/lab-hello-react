import './App.css';
import ironhack from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';


function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={ironhack} alt="logo" className='ironhack-logo' />
          <img src={menu} alt="menu" className='menu-top' />
        </nav>
        <section className='main-section'>
          <div>

            <h1>
              Say hello to
              <br />
              ReactJS
            </h1>
            <p>
              You will learn how to use <br />
              the most popular frontend library,<br />
              and become a super Ninja developer.
            </p>

            <button>Awesome!</button>

          </div>
        </section>
      </main>

      <section className='footer-section'>

        <div>
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
          <img src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>

        <div>
          <img src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component&lsquo;s</p>
        </div>

        <div>
          <img src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed,designed to run on modern browsers.</p>
        </div>

      </section>

      {/*  ///  */}  </div>
  );
}

export default App
