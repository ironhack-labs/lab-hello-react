import logo from './images/ironhack-logo-xs.png';
import hamburger from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import { Header } from "./components/Header";
import { Caption } from "./components/Caption";
import { SolidButton } from "./components/SolidButton";
import { FeatureText } from "./components/FeatureText";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo Ironhack" />
          <img src={hamburger} className="Menu-icon" alt="logo Ironhack" />
        </nav>
        <Header text={"Say hello to ReactJS"} />
        <Caption text={"You will learn how to use the most popular frontend library, and become a super Ninja developer"} />
        <SolidButton />
      </header>
      <div className="App-row">
        <div className="App-column">
          <img src={icon1} className="App-feature" alt="" />
          <h3>Declarative</h3>
          <FeatureText text={"React makes it painless to create interactive Ui's"} />
        </div>
        <div className="App-column">
          <img src={icon2} className="App-feature" alt="" />
          <h3>Components</h3>
          <FeatureText text={"Build encapsulated components that manager their state"} />
        </div>
        <div className="App-column">
          <img src={icon3} className="App-feature" alt="" />
          <h3>Single-way</h3>
          <FeatureText text={"A set of immutable values are passed to the component's"} />
        </div>
        <div className="App-column">
          <img src={icon4} className="App-feature" alt="" />
          <h3>JSX</h3>
          <FeatureText text={"Statically-typed designed to run on modern browsers"} />
        </div>

      </div>
    </div>
  );
}
export default App;

