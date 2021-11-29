import './App.css';
import logo from './images/ironhack.png';
import menu from './images/nav.png';
import icon1 from './images/wrench.png';
import icon2 from './images/playpen.png';
import icon3 from './images/cog.png';
import icon4 from './images/code.png';


function App() {
  return (
    <div className="App">
      <div className="topContainer" style={{backgroundColor: '#1f2535'}}>
      <div className="nav">
        <img src={logo} className="logo" alt="App-logo"/>
        <img src={menu} className="menu" alt="Nav-icon"/>
      </div>

      <div className="heading">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
      <button className="awesomeButton">Awesome!</button>
      </div>
      </div>

      {/* lower half */}

      <div className='lowerContainer'>
        <div className='infoDiv'>
        <img src={icon1} alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
        </div>

        <div className='infoDiv'>
        <img src={icon2} alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
        </div>

        <div className='infoDiv'>
        <img src={icon3} alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components</p>
        </div>

        <div className='infoDiv'>
        <img src={icon4} alt="" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>

    </div>

    
    
  );
}

export default App;

