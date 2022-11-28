import logo from './images/ironhack-logo-xs.png';
import './App.css';

function App() {

  const main = (
    <main>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use <br/>the most popular frontend library, <br/>and become a super Ninja developer.</p>
      <button>Awesome!</button>
    </main>
  )

  const features = (
    <section className="features">
      <div className="cards">
        <div>
          <img src="./images/icon1.png" alt="icon1"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src="./images/icon2.png" alt="icon2"/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src="./images/icon3.png" alt="icon3"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src="./images/icon4.png" alt="icon4"/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </section>
  )


  return (
    <div className="App">
      {main}
      {features}
    </div>
  );
}

export default App;
