
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-images">
          <img src="/images/ironhack-logo-xs.png" alt="logo" />
          <a href="/">
            <img src="/images/menu-top-xs.png" alt="menu" id="imageMenu" />
          </a>
        </div>
        <div className="header-content">
          <h1 className="header-h1">Say hello to ReactJS</h1>
          <p className="header-p">
            You will learn how to use<br /> the most popular frontend library,<br /> and become a super
            Ninja developer.
          </p>
          <a className="awesome-btn" href="/">
            Awesome!
          </a>
        </div>
      </header>

      <section className="body-content">
        <div className="contentCard">
          <img src="/images/icon1.png" alt="card-icon"></img>
          <h3 className="contentH3">Declarative</h3>
          <p className="contentP">React makes it painless to create interactive UIs</p>
        </div>
        <div className="contentCard">
          <img src="/images/icon2.png" alt="card-icon"></img>
          <h3 className="contentH3">Components</h3>
          <p className="contentP">Build encapsulated components that manage their state.</p>
        </div>
        <div className="contentCard">
          <img src="/images/icon3.png" alt="card-icon"></img>
          <h3 className="contentH3">Single-way</h3>
          <p className="contentP">A set of immuatble values are passed to the component's.</p>
        </div>
        <div className="contentCard">
          <img src="/images/icon4.png" alt="card-icon"></img>
          <h3 className="contentH3">JSX</h3>
          <p className="contentP">Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>

    </div>
  );
}

export default App;
