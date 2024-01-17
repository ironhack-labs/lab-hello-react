import "./Icons.css";

function Icons() {
  return (
    <div id="icons">
      <div className="icon">
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
          alt="icon1"
        />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="icon">
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
          alt="icon2"
        />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="icon">
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
          alt="icon3"
        />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="icon">
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
          alt="icon4"
        />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Icons;
