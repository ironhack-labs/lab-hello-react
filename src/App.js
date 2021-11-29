import logo from './logo.svg';
import ironlogo from './images/ironlogo.png';
import burger from './images/burger.png';
import Card from './components/Card';
import tool from './images/tool.png';
import house from './images/house.png';
import settings from './images/settings.png';
import code from './images/code.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bigbox">
        <div className="box1">
          <img src={ironlogo} className="logo" alt="ironlogo" />
          <img src={burger} className="logo" alt="burger" />
        </div>
          <div className="box2">
            <h1 className="hello"> Say hello to Reactjs</h1>
            <p> You will learn hot to use the most popular frontend
              library, and become a super Ninja developer</p>
            <button>Awesome!</button>
          </div>
      </div>
      <div className="box3">
      <Card image={tool}  title="Declarative" information="React makes it painless to create interactive UIs"/>    
      <Card image={house}  title="Components" information="Build encapsulated components that manage their state"/>    
      <Card image={settings} title="Single-way" information="A set of immutable values are passed to the component's"/>    
      <Card image={code} title="JSX" information="Statically-typed designed to run on modern browsers"/>    
      </div>
     
    </div>
  );
}

export default App;
