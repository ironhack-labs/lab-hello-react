// src/App.jsx
import './App.css';
import ironLogo from './assets/ironhack-logo-xs.png';
import menuTop from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';


function App() {
  return (
    <>
      <main>
        <nav>
          <img src={ironLogo} alt='Ironhack Logo' />
          <img src={menuTop} alt='MenuTop Icon' />
        </nav>{' '}
        {/*img tags here*/}
        <section>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library,
            <br /> and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </section>
      </main>
      <section id='btm-section'>
        <div className='container'>
          <img src={icon1} alt='' />
          <div>
            <h3 className='title'>Declarative</h3>
            <p className='text'>
              React makes it <br />painless to create interactive UIs.
            </p>
          </div>
        </div>
        <div className='container'>
          <img src={icon2} alt='' />
          <div>
            <h3 className='title'>Components</h3>
            <p className='text'>
              Build encapsulated components that manage their state.
            </p>
          </div>
        </div>
        <div className='container'>
          <img src={icon3} alt='' />
          <div>
            <h3 className='title'>Single-Way</h3>
            <p className='text'>
              A set of immutable values are passed to the components.
            </p>
          </div>
        </div>
        <div className='container'>
          <img src={icon4} alt='' />
          <div>
            <h3 className='title'>JSX</h3>
            <p className='text'>
              Statically-typed, designed to run on modern browsers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
