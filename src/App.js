import './App.css';

function App() {
  return (
    <div className="App">
      <div className="dark">
      <header className="App-header">
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" className="App-logo" alt="logo" />
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" className="App-logo" alt="logo" />
      </header>
      <section className="title">
        <h1>Say hello to ReactJS</h1>
      </section>
      <p>You will learn how to use
        <br/>
        the most popular frontend library,
        <br/>
        and become a super Ninja developer.</p>
      <button className="btn">Awesome!</button>
      </div>
      <div className="icons">
        <div className="each-icon">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" className="App-logo" alt="logo" />
          <span><h2>Declarative</h2>React makes it painless to create interactive UIs.</span>
        </div>
        <div className="each-icon">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" className="App-logo" alt="logo" />
          <span><h2>Components</h2>Build encapsulated components that manage their state.</span>
        </div>
        <div className="each-icon">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" className="App-logo" alt="logo" />
          <span><h2>Single-Way</h2>A set of immutable values are passed to the component's.</span>
        </div>
        <div className="each-icon">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" className="App-logo" alt="logo" />
          <span><h2>JSX</h2>Statically-typed, designed to run on modern browsers.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
