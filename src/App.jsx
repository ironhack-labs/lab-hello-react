import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div id= "top-page">
      <Navbar></Navbar>
      <h2>Say Hello to ReactJS</h2>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super ninja developer
      </p>
      
      <button>Awesome!</button>
      </div>

      <div id="images">
        <div>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
          alt=""
        />
        <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
          alt=""
        />
        <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
          alt=""
        />
        <p>A set of immutable values are passed to the components.</p>
        </div>
        
        <div>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
          alt=""
        />
        <p>Statistically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
