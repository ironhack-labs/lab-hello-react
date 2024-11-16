/**
 * https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png
 * https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png
 * https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png
 * https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png
 * https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png
 * https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png
 */

import './App.css'

function App() {

  return (
      <div className="App">
        <section id="presentation">
          <nav>
            <div>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="ironhack-logo" />
            </div>
            <div>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="menu-top" />
            </div>
          </nav>
          <h1>Say hello to ReactJS</h1>
          <p className='subTitle'>You will learn how to use 
            the most popular forkered library 
            and become a super Ninja developer.
          </p>
          <button type="button">Awesome!</button>
        </section>
        <section>
          <div className='container'>
            <div>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="icon1" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="icon2" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="icon3" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component&apos;s.</p>
            </div>
            <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="icon4" />
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
