import "./App.css";

function App() {
  return (
    <div>
      <section className="header">
        <div className="nav-bar">
          <img src="./images/ironhack-logo-xs.png" alt="ironhack logo" />
          <img src="./images/menu-top-xs.png" alt="menu top" />
        </div>
        <div className="header-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <div className="awesome-btn">
            <a href="#">Awesome!</a>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info">
          <img src="./images/icon1.png" alt="declarative" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="info">
          <img src="./images/icon2.png" alt="components" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="info">
          <img src="./images/icon3.png" alt="single-way" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="info">
          <img src="./images/icon4.png" alt="jsx" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}
export default App;
