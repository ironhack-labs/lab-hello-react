
import './App.css';

function App() {
  return (
    <div className="App">

    <header className="App-header"> 
      <nav>
        <img src="/images/ironhack-logo-xs.png" alt="" className="nav-logo"></img>
        <img src="/images/menu-top-xs.png" alt="" className="nav-logo" id="menu"></img>

      </nav>
    </header>
    <main>
      <section id="intro">

        <div id="text-container">
          <h1 id="title">
            Say hello to ReactJS
          </h1>
          <p id="subtitle">
            You will learn how to use<br/>
            the most popular front end library,<br/>
            and become a Super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </section>
      <section id="freatures">

        <div className="freature-card">
          <img src="/images/icon1.png" alt="" className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">Declarative</h3>
            <p className="card-text">React makes it painless to create interactive UIs</p>
          </div>
        </div>
        <div className="freature-card">
          <img src="/images/icon2.png" alt="" className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">Components</h3>
            <p className="card-text">Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className="freature-card">
          <img src="/images/icon3.png" alt="" className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">Single-Way</h3>
            <p className="card-text">A set of immutable values are passed to the component's</p>
          </div>
        </div>
        <div className="freature-card">
          <img src="/images/icon4.png" alt="" className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">JSX</h3>
            <p className="card-text">Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>

    
      </section>
    </main>


    </div>
  )

}

export default App;
