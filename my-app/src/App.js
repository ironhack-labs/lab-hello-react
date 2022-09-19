import './App.css';
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import Button from './component/Button';

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
const heading = <h1> Say hello to <p>ReactJS</p></h1>;
const description = <p>You will learn how to use <p>
  the most popular frontend library,</p>
  <p>and become a super Ninja developer.</p></p>;
  const declarative = <h1> Declarative </h1>;
  const components = <h1> Components </h1>;
  const singleWay = <h1> Single-Way </h1>;
  const jsx = <h1> JSX </h1>;
  const declarativeText = <p>React makes it painless to create interactive UIs.</p>;
  const componentsText = <p>Build encapsulated components that mange their state.</p>;
  const singleWayText = <p>A set of immulable values are passed to the coponent's.</p>;
  const jsxText = <p>Statically-type, designed to run on modern browsers.</p>;

function App() {
  return (
    <div className="App">
      <div>
        <header className = "App-header">
          <div>
          <img className = "logo" src={logo} alt="logo iron hack"/>
          <img className = "menu" src={menu} alt="menu website"/>
          </div>
          <div className = "title">
            {heading}
          </div>
          <div className = "description">
            { description}
          </div>
          <div className="button1">
          <Button/>
          </div>
        </header > 
      </div>
      <div className="body">
        
        <div className = "bodycard1">
          <img className = "icon" src={icon1} alt="First Icon Ironhack"/>
          <div className ="description1">
          {declarative }
          </div>
          <div className = "descriptiontext">
          {declarativeText}
          </div>
        </div>
        

        <div className = "bodycard1">
          <img className = "icon" src={icon2} alt="Second Icon Ironhack"/>
          <div className ="description1">
          {components}
          </div>
          <div className = "descriptiontext">
          {componentsText}
        </div>
        </div>

        <div className = "bodycard1">
          <img className = "icon" src={icon3} alt="Third Icon Ironhack"/>
          <div className ="description1">
          {singleWay}
          </div>
          <div className = "descriptiontext">
          {singleWayText}
        </div>
        </div>

        <div className = "bodycard1">
          <img className = "icon" src={icon4} alt="Fourth Icon Ironhack"/>
          <div className ="description1">
          {jsx}
          </div>
          <div className = "descriptiontext">
          {jsxText}
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
export default App;
