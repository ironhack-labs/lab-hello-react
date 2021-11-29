
function Features() {
    return (
      <div className="features-row">
        <div className="features-card">
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="icon 1" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="features-card">
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="icon 2" />
            <h2>Components</h2>
            <p>Build encapsulated components that manages their state.</p>
        </div>
        <div className="features-card">
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="icon 3" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="features-card">
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="icon 4" />
            <h2>JSW</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    );
  }
  
  // 2. Export the function:
  export default Features;