
import './App.css';


function App() {
  return (
  <div className="App">
    <div id="background">
    <nav>
                    <div id="menu">
                    <img id="Ironhack-logo" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="ironhack-logo" />
                    <img id="Lines" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"  alt="lines" />
                    </div>
                    <div class="text">
                    <h1>Say hello to <br/>
                        ReactJS</h1>
                      <p>You will learn how to use <br/>
                         the most popular frontend libary, <br/>
                         and become a super Ninja developer.
                      </p>
                    </div>
          </nav>
    

              <a href="https://reactjs.org">
                 <button className="btn">Awesome!</button>
              </a>
      </div>
      <div id="container-class">
                <div class="icon1">
                   <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="1"/>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div class="icon2">
                   <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="2"/>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div class="icon3">
                   <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="3"/>
                    <h2>Single-Way</h2>
                    <p>Set of immutable values are passed to the component's.</p>
                </div>
                <div class="icon4"> 
                   <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="4"/>
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
        </div>



  </div>
  );
}

export default App;
