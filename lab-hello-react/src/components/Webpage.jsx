function Webpage() {
  return (
    <div>
      <div className="landingPage">
        <nav className="nav-container">
          <img
            className="navIcon1"
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
            alt="Ironhack Logo"
          />
          <img
            className="navIcon2"
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
            alt="Ironhack Logo"
          />
        </nav>
        <br />
        <br />
        <br />
        <br />

        <div className="text-container">
          <h1 className="webPageText">
            <b className="webPageText2">Say hello to</b>
          </h1>
          <h1 className="webPageText">
            <b className="webPageText2">ReactJS</b>
          </h1>
          <p className="webPageText">
            You will learn how to use
            <p className="webPageText">
              the most popular frontend library,
              <p className="webPageText">and become a super ninja developer.</p>
            </p>
          </p>

          <br />
          <br />

          <button className="landing-page-button"> Awesome!</button>
        </div>
      </div>
      
      <br />

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="card border-0">
            <img className="row-img"
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
              alt="Icon 1"
            />
            <div className="card-body">
              <p className="card-text">
                <b>Declarative</b>
              </p>
              <p className="card-text">
                React makes it painless to create interactive UI's
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card border-0">
            <img className="row-img"
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
              alt="Icon 2"
            />
            <div className="card-body">
              <p className="card-text">
                <b>Components</b>
              </p>
              <p className="card-text">
                Build encapsulated components that manage their state.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card border-0">
            <img className="row-img"
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
              alt="Icon 3"
            />
            <div className="card-body">
              <p className="card-text">
                <b>Single-Way</b>
              </p>
              <p className="card-text">
                A set of immutable values are passed to the component's.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card border-0">
            <img className="row-img"
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
              alt="Icon 4"
            />
            <div className="card-body">
              <p className="card-text">
                <b>JSX</b>
              </p>
              <p className="card-text">
                Statically typed, designed to run on modern browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default Webpage;
