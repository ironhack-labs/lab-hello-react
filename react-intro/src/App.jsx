import './App.css'

function App() {
 
  return (
    <div className='App'>
        <nav>
        <img src="../src/assets/ironhack-logo-xs.png" alt="" />
        <img id='menu' src="../src/assets/menu-top-xs.png" alt="" />
        </nav>
        <section id='reactIntro'>
          <div id='reactIntroText'>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <span id="awesome">Awesome!</span>
          </div>
        </section>
        <section id='info'>
          <div className='infoDiv'>
            <img src="../src/assets/icon1.png" alt="" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className='infoDiv'>
            <img src="../src/assets/icon2.png" alt="" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className='infoDiv'>
            <img src="../src/assets/icon3.png" alt="" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className='infoDiv'>
            <img src="../src/assets/icon4.png" alt="" />
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </section>
      </div>
  )
}

export default App
