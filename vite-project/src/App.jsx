import "./App.css";

function App() {
  return (
    <>
      <div className="App">
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

        <div className="images">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
            alt=""
          />
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
            alt=""
          />
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
            alt=""
          />
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
