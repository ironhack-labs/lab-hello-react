import './App.css';
import Card from './components/card/Card'

function App() {
  return (
   <div className="App">
    <div className="header">
      <img src="/images/ironhack-logo-xs.png" alt="ironhack logo"/>
      <img src="/images/menu-top-xs.png" alt="menu"/>
    </div>
    <div className="heroContent">
      <h1 className="heroStatement">Say hello to ReactJs</h1>
      <p className="heroDescription">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <button href="" >Awesome!</button>
    </div>   
    <div className="cards">
      <Card image="/images/icon1.png" information="React makes it painless to create interactive UIs."/>
      <Card image="/images/icon2.png" information="Build encapsulated components that manage their state."/>
      <Card image="/images/icon3.png" information="A set of immutable values are passed to the component's."/>
      <Card image="/images/icon4.png" information="Statically-typed, designed to run on modern browsers."/>
    </div>
  </div>
  );
}

export default App;
