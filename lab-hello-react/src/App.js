// import logo from './logo.svg';
import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuTop from "./images/menu-top-xs.png";
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

const heading = <h1>Say hello to ReactJS</h1>;
const subHeading = 
  <p>
    You will learn how to use <br></br>
    the most popular frontend library,<br></br>
    and become a super Ninja developer.
  </p>

  function createTile(img, alt, h3, text){
    return <div class= "tile">
            <img class= "tile-img" src={img} alt={alt}/>
            <h3>{h3}</h3>
            <p class= "p-tile">{text}</p>
          </div>
  };


function App() {
  return (
    <div>
      <header class="header">
        <div class="logo-top">
          <div>
            <img src={ironhackLogo} alt="ironhack logo" />
          </div>
          <div>
            <img src={menuTop} alt="menu top" />
          </div>
        </div>
        <div class="header-text">
          {heading}
          {subHeading}
          <button class="button">Awesome!</button>
        </div>
      </header>
      <div class="tile-container">
          {createTile(icon1, "icon1", "Declarative", "React makes it painless to create interactive UIs.")}
          {createTile(icon2, "icon2", "Components", "Build encapsulated components that manage their state.")}
          {createTile(icon3, "icon3", "Single-Way", "A set of immutable values are passed to the component's.")}
          {createTile(icon4, "icon4", "JSX", "Statically-typed, designed to run on modern browsers.")}
      </div>
      
    </div>
  );
}

export default App;
