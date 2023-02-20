import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello from React LAB!</h1>
        <div className="hero-section">
          <div className="navbar">
            <img src="/images/ironhack-logo-xs.png" alt="" />
            <img src="/images/menu-top-xs.png" alt="" />
          </div>
          <div className="hero">
            <div className="hero-text">
              <h1 className="hero-title">Say hello to ReactJS</h1>
              <h2 className="hero-description">
                You will learn how to use the popular frontend library, and
                become a super ninja developer
              </h2>
              <button className="hero-btn">Awesome!</button>
            </div>
          </div>
        </div>
        <section className="features-section">
          <div className="features">
            <div className="feature-card">
              <img src="/images/icon1.png" alt="" className="feature-img" />
              <h2 className="feature-title">Declarative</h2>
              <h2 className="feature-description">
                React makes it painless to create interactive UIs.
              </h2>
            </div>
            <div className="feature-card">
              <img src="/images/icon2.png" alt="" className="feature-img" />
              <h2 className="feature-title">Components</h2>
              <h2 className="feature-description">
                Build encapsulated components that manage their state.
              </h2>
            </div>
            <div className="feature-card">
              <img src="/images/icon3.png" alt="" className="feature-img" />
              <h2 className="feature-title">Single-Way</h2>
              <h2 className="feature-description">
                A set of immutable values are passed to the components
              </h2>
            </div>
            <div className="feature-card">
              <img src="/images/icon4.png" alt="" className="feature-img" />
              <h2 className="feature-title">JSX</h2>
              <h2 className="feature-description">
                Statically-typed. Designed to run on modern browsers
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
