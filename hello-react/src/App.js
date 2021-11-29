import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img  src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="Logo"></img>
        <img  src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="Menu"></img>
      </div>

      <div className="App-header">
        <div className="header-order">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend ibary, and become a super Ninja developer</p>
          <button className="button-home" type="button">Awesome!</button>
        </div>
      </div>

      <div className="App-section">
        <div className="home-container">
          <img className="home-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="Declarative"></img>
          <h2>Declarative</h2>
          <p>React makes it plainless to create interactive UIs.</p>
        </div>

        <div className="home-container">
          <img className="home-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="Components"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="home-container">
          <img className="home-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="Single-Way"></img>
          <h2>Single-Way</h2>
          <p>Aset of immutable values are passed to the component's.</p>
        </div>

        <div className="home-container">
          <img className="home-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="JSX"></img>
          <h2>JSX</h2>
          <p>Statically-typed, desined to run on modern browsers.</p>
        </div>
      </div>

    </div>

  );
  
}

export default App;
