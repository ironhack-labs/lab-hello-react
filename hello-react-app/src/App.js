import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heroContainer">
        <div>
          <nav>
            <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="Ironhack Logo" />
            </div>
           <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="Hamburger Menu" />
            </div>
          </nav>
        </div>
        <div>
          <h1>
            <div>Say hello to</div>
            <div>ReactJS</div>
          </h1>
          <p>
            <div>
            You will learn how to use
            </div>
            <div>
            the most popular frontend library,
            </div>
            <div>
            and become a super ninja developer.
            </div>
          </p>
          <button>Awesome!</button>
        </div>
        <div className="heroImg1">
          <img src="{logo}" alt="React App Logo" />
        </div>
        <div className="heroImg2">
        <img src="{logo}" alt="React App Logo" />
        </div>
        <div className="heroImg3">
        <img src="{logo}" alt="React App Logo" />
        </div>
        <div className="heroImg4">
        <img src="{logo}" alt="React App Logo" />
        </div>
        <div className="heroImg5">
        <img src="{logo}" alt="React App Logo" />
        </div>
        <div className="heroImg6">
        <img src="{logo}" alt="React App Logo" />
        </div>
      </div>

      <div className="endingContainer">

        <div className="endingImg1">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="" />
          <h3><b>Declarative</b></h3>
          <div>
          <p>
          React makes it 
          painless to create
          interactive UIs.
          </p>
          </div>
        </div>
        <div className="endingImg2">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="" />
          <h3><b>Components</b></h3>
          <div>
          <p>
            Build encapsulated components 
            that manage their state.
          </p>
          </div>
        </div>
        <div className="endingImg3">
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="" />
        <h3><b>Single-Way</b></h3>
          <div>
          <p>
            A set of immutable values are 
            passed to the components.
          </p>
          </div>
        </div>
        <div className="endingImg4">
         <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="" />
         <div>
         <h3><b>JSX</b></h3>
          <p>
            Statically-typed
            designed to run on 
            modern browsers.
          </p>
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
