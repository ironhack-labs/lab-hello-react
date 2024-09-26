import logo from './logo.svg';
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuIcon from "./images/menu-top-xs.png";
import "./App.css";
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="main">
      <div className="contenido">
        <div className="barraNavegacion">
         <img src={ironhackLogo} alt="ironhack"/>
         <img src={menuIcon} alt="menuIcon"/>
        </div>
        <div>
         <h1>Say hello to <br/>ReactJS</h1>
         <p>You will learn tu use<br/> the most popular
          frontend library,<br/> and become a super Ninja developer.
         </p>
         <button>Awesome!</button>
       </div>
        
      </div>
      <div className="info">
        <div className="card">
         <img src={icon1} alt="icono1"></img>
         <strong>Declarative</strong>
         <p>React makes it <br/>painless to create<br/> interactive UIs.</p>
        </div>
        <div className="card">
         <img src={icon2} alt="icono2"></img>
         <strong>Components</strong>
         <p>Build encapsulated <br/>components that <br/>manage their state</p>
        </div>
        <div className="card">
         <img src={icon3} alt="icono3"></img>
         <strong>Single-Way</strong>
         <p>A set of immutable <br/>values are passed to <br/>the components</p>
        </div>
        <div className="card">
         <img src={icon4} alt="icono4"></img>
         <strong>JSX</strong>
         <p>Statically-typed,<br/> designed to run on<br/> modern browsers.</p>
        </div>
       </div>
   </div>
  );
}

export default App;
