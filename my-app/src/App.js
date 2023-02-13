import './App.css';
import ironhackLogo from './images/logo.png';
import dropDownMenu from './images/dropdown.png';
import components from './images/components.png'
import declarative from './images/declarative.png'
import singleWay from './images/single-way.png'
import jsx from './images/jsx.png'

function App() {
  return (
    <div className="App">
      <header className="Heading-section">
        <nav>
          <div>
            <img src={ironhackLogo}></img>
            <img src={dropDownMenu}></img>
          </div>
        </nav>
        <section>
          <h1>Say hello to ReactJs</h1>
          <main>
            <h5>You will learn how to use </h5>
            <h5>the most popular frontend library,</h5>
            <h5>and become a super Ninja developer.</h5>
          </main>
          <h3>Awesome!</h3>
        </section>


      </header>



      <section className="mainSection">
        <div>
          <img src={declarative}></img>
          <h3>Declarative!</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={components}></img>
          <h3>Components!</h3>
          <p>Build encapsulated components that manage their state.</p>

        </div>
        <div>
          <img src={singleWay}></img>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src={jsx}></img>
          <h3>JSX!</h3>
          <p>Statistically-typed, designed to run on moden browsers.</p>

        </div>
      </section>

    </div>
  );
}

export default App;
