import './App.css';

function App() {
  return (
    <div className="App">
    <header>
      <div class="imgs">
      <img  src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="Ironhack logo" />
      <img  src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" />
      </div>
    <h1>Say hello to <br/> ReactJS</h1>    
    <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer.</p>
      <button>Awesome!</button>
       </header>

       <ul>
        <li><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"/><h2>Declarative</h2><p>React makes it painless to create interactive UIs.</p></li>
        <li><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"/><h2>Components</h2><p>Build encapsulated components that manage their state.</p></li>
        <li><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"/><h2>Single-Way</h2><p>A set of inmutable values are passed to the components.</p></li>
        <li><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"/><h2>JSX</h2><p>Statycally-typed, designed to run on modern browsers.</p></li>
       </ul>


    </div>
  );
}

export default App;
