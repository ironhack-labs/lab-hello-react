import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <>
      <section className='section'>
        <nav className='nav'>
          <img
            src='images/ironhack-logo-xs.png'
            alt='fondo'
            className='App-logo'
          ></img>
          <img src='images/menu-top-xs.png' alt='menu'></img>
        </nav>
        <div className='App-header'>
          <h1>
            Say hello to <br /> ReactJS
          </h1>

          <p>
            You will learn how to use <br /> the most popular frontend library,
            <br /> and become a super Ninja developer.
          </p>

          <button className='button'>Awesome!</button>
        </div>
      </section>
      <div className='cards'>
        <div>
          <img src='/images/icon1.png' alt='card1'></img>
          <h3>Declarative</h3>
          <p>
            React makes it <br></br> painless to create <br></br> interactive
            UIs.
          </p>
        </div>

        <div>
          <img src='/images/icon2.png' alt='card2'></img>
          <h3>Components</h3>
          <p>
            Build encapuslated <br></br> components that <br></br> manage their
            state.
          </p>
        </div>

        <div>
          <img src='/images/icon3.png' alt='card3'></img>
          <h3>Single-Way</h3>
          <p>
            A set of immutable <br></br> valuse ara passed to <br></br> the
            component's.
          </p>
        </div>

        <div>
          <img src='/images/icon4.png' alt='card4'></img>
          <h3>JSX</h3>
          <p>
            Statically-typed <br></br> designed to run on <br></br> modern
            browsers.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
