import logo from './logo.svg';
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuIcon from "./images/menu-top-xs.png";
import './App.css';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"


function App() {
  

  return (
    <div class="app">
        <div class="top">
          
            
                <nav class= "nav">
                    <img class="left" src={ironhackLogo} alt="ironhack"/>
                    <img class="right" src={menuIcon} alt="menu"/>
                </nav>
            
            
            <div class="atom">
            <h1>Say hello to <br/> ReactJS</h1>
            <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer</p>
            <img  src={logo} alt="log"/>
            </div>
          <div class="botton">
            <button>Awesome</button>
          </div>
        </div>
        <div class="iconz">
          <div>
            <img src={icon1} alt="notfound"/>
            <strong>Declarative</strong>
            <p>React makes it <br/> painless to create <br/> interactive UIs</p>
          </div>
          <div>
            <img src={icon2} alt="notfound"/>
            <strong>Components</strong>
            <p> Build encapsulated <br/> Components that <br/> manage their state </p>
          </div>
          <div>
            <img src={icon3} alt="notfound"/>
            <strong>Single-Way</strong>
            <p> A set of immutable <br/> values are passed to <br/> the component's </p>
          </div>
          <div>
            <img src={icon4} alt="notfound"/>
            <strong>JSX</strong>
            <p> Statically-typed, <br/> designed to run on <br/> modern browsers</p>
          </div>
        </div>
        
    </div>
  );
}


export default App;
