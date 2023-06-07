import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <section className="top">
          <header>
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
              alt="logo IronHack"
            />
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" />
          </header>

          <div className="main">
            <h1>Say hello to ReactJS</h1>

            <p>You will learn how to use</p>
            <p>the most popular frontend library,</p>
            <p>and become a super Ninja developer.</p>

            <button>Awesome!</button>
          </div>
        </section>
        <div className="images">
          <div className="image__content">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
              alt=""
            />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="image__content">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
              alt=""
            />
            <h2>Components</h2>
            <p>Build encaspsulated components that manage their state.</p>
          </div>
          <div className="image__content">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
              alt=""
            />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components</p>
          </div>
          <div className="image__content">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
              alt=""
            />
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
