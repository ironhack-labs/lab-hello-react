import ironhack from './images/ironhack-logo-xs.png';
import menutop from './images/menu-top-xs.png';
import card1 from './images/icon1.png';
import card2 from './images/icon2.png';
import card3 from './images/icon3.png';
import card4 from './images/icon4.png';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="mar">
            <div>
              <nav>
                <img src={ironhack} alt="logoIrohack" className="ironhack"/>
                <img src={menutop} alt="menu" className="menu"/>
              </nav>
              <div>
                <h1>Say hello to </h1>
                <h1>ReactJS</h1>
              </div>
              <div className="texto">
                <p> You will learn how to use</p>
                <p>the most popular frontend library,</p>
                <p> and become a super Ninja developer.</p>
                <br></br>
              </div>
              <div>
                <button>Awesome!</button>
              </div>
              
            </div>
          </div>
        </header>
        <div className="cajitas">
          <div>
            <img src={card1} alt="Declarative"/>
            <h4>Declarative</h4>
            <div> 
              <p>React makes it</p>
              <p>painless to create</p>
              <p>interactive UIs.</p>
            </div>
          </div>
          <div className="box">
            <img src={card2}  alt="Components"/>
            <h4>Components</h4>
            <div> 
              <p>Build encapsulated</p>
              <p>components that</p>
              <p>manage their state.</p>
            </div>
          </div>
          <div>
            <img src={card3} alt="Single-way"/>
            <h4>Single-Way</h4>
            <div>
              <p>A set of immitable</p>
              <p>values are passed to</p>
              <p>the component's.</p>
            </div>
          </div>
          <div>
            <img src={card4} alt="JSX" />
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
