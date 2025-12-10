import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header/Navbar */}
      <nav className="navbar">
        <img src="/src/assets/ironhack-logo-xs.png" alt="Ironhack Logo" />
        <img src="/src/assets/menu-top-xs.png" alt="Menu" />
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Say hello to<br />ReactJS</h1>
        <p>
          You will learn how to use<br />
          the most popular frontend library,<br />
          and become a super Ninja developer.
        </p>
        <button className="btn-awesome">Awesome!</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="/src/assets/icon1.png" alt="Declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="feature">
          <img src="/src/assets/icon2.png" alt="Components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="feature">
          <img src="/src/assets/icon3.png" alt="Single-Way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="feature">
          <img src="/src/assets/icon4.png" alt="JSX" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;