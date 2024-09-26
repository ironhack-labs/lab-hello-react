import logo from './logo.svg';
import './App.css';
import sayHello from './sayHello.js'

function App() {
  return (
    <div className="App">

    <section class="square">
      {/* <sayHello/> */}
      <div class="nav">
    <img class="littleimg1" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="bob" />
    <img class="littleimg2" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="bob" />
    </div>  

    

    <div class="inside"> 
      

    <h1>Say hello to ReactJS</h1>

    <p>You will learn how to use the most popular frontend library, and become a super ninja developer.</p>

    <button>Awsome!</button>
    </div>

    </section>
    <section class="cards">

      <div class="indiv">
      <img class="img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="bob" />
      <br></br>
        <b>Declarative</b>
        <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div class="indiv">
      <img class="img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="bob" />
      <br></br>
        <b>Components</b>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div class="indiv">
      <img class="img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="bob" />
      <br></br>
        <b>Single-way</b>
        <p>A set of immutable values that are passed to the component's.</p>
      </div>

      <div class="indiv">
      <img class="img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="bob" />
      <br></br>
        <b>JSX</b>
        <p>Statically typed. Designed to run on modern browsers.</p>
      </div>

    </section>

    </div>
  );
}

export default App;
