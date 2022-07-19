import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mar">
          <div>

            <nav>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" />
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" />
            </nav>

            <div>
              <h1>Say hello to </h1>
              <h1>ReactJS</h1>
            </div>

            <div>
              <p> You will learn how to use </p>
              <p>the most popular frontend library,</p>
              <p> and become a super Ninja developer.</p>
            </div>

            <div>
              <button> Awesome</button>
            </div>
            
          </div>
        </div>
      </header>

      <div className="al">
        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" />
          <h4>Declarative</h4>
          <div> 
            <p>React makes it</p>
            <p>painless to create</p>
            <p>interactive UIs.</p>
          </div>
          
        </div>

        <div className="box">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" />
          <h4>Components</h4>
          <div > 
            <p>Build encapsulated</p>
            <p>components that</p>
            <p>manage their state.</p>
          </div>
          
        </div>

        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" />
          <h4>Single-Way</h4>
          <div>
            <p>A set of immitable</p>
            <p>values are passed to</p>
            <p>the component's.</p>
          </div>
          
        </div>

        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" />
          <h4>JSX</h4>
          <div>
            <p>Statically typed,</p>
            <p>designed to run on</p>
            <p>modern browsers.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
