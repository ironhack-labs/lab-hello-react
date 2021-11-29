
import './App.css';
import logo from './images/ironhack-logo-xs.png';
import burger from './images/menu-top-xs.png';
import llaveing from './images/llaveinglesa.png';
import play from './images/play.png';
import engine from './images/engine.png';
import script from './images/script.png';



function App() {
  return (
    <div className="App">

<div className="background-top">
    <div className="content-wrapper">
    <div className="top-images">
    <img className="ironhack-logo" src={logo} alt="logo" />
    <img className="burger" src={burger} alt="menu"/>
    </div>

      <h1 className="hello">Say hello to ReactJS</h1>
      <p className="hello-txt">You will learn how to use the most popular frontend library and become a super Ninja developer</p>

      <button className="button">Awesome!</button>
      </div>
 </div>


<div className="bottom-wrapper">
    <div className="firstblock">
      <img src={llaveing} alt="img"/>
      <p className="subtitle">Declarative</p>
      <p className="sub-txt">React makes it painless to create interactive UIs</p>
    </div>

    <div className="2ndblock">
      <img src={play} alt="img"/>
      <p className="subtitle">Components</p>
      <p className="sub-txt">Buils encapsulated components that manage their state</p>
    </div>

      <div className="3rdblock" >
        <img src={engine} alt="img" />
        <p className="subtitle">Single-way</p>
        <p className="sub-txt">A set of immutable values are passed to the components</p>
      </div>

      <div className="4thblock">
        <img src={script} alt="img"/>
        <p className="subtitle">JSX</p>
        <p className="sub-txt">Statically-typed, designed to run on modern browsers</p>
    </div>

      </div>
      {/* end of content wrapper */}
    
    </div>
  );
}

export default App;
