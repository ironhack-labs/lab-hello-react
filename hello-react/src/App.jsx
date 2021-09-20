import './App.css';
import Card from './components/card/Card';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';

function App() {
  return (
   <div className="App">
    <div className="header">
      <img src={logo} alt="ironhack logo"/>
      <img src={menu} alt="menu"/>
    </div>
    <div className="heroContent">
      <h1 className="heroStatement">Say hello to ReactJs</h1>
      <p className="heroDescription">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <button className="buttonAwesome">Awesome!</button>
    </div>   
    <div className="cards">
      <Card image={icon1} title="Declarative" information="React makes it painless to create interactive UIs."/>
      <Card image={icon2} title="Components" information="Build encapsulated components that manage their state."/>
      <Card image={icon3} title="Single-Way" information="A set of immutable values are passed to the component's."/>
      <Card image={icon4}title="JSX" information="Statically-typed, designed to run on modern browsers."/>
    </div>
  </div>
  );
}

export default App;
