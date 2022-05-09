import logo from './logo.svg';
import ironhackLogo from "./images/ironhack-logo-xs.png"
import menuIcon from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import './App.css';

function App() {

  return (
  <div className='main'>
    <div className='contenido'>
      <div className='barraNavegacion'>
        <img src= {ironhackLogo} alt="ironhack" />
        <img src= {menuIcon} alt="menu" />
      </div>
      <h1>Say hello to <br/> ReactJS</h1>
      <p>You will learn how to use <br/>the most popular fronted library,<br/>and become a super Ninja developer. </p>
      <button>Awsome!</button>
    </div>

  <div className='info'>
    <div className='card'>
      <img src={icon1} alt="icono 1"/>
      <strong>Declarative</strong>
      <p>React makes it<br/>painless to create<br/>interactive UIs.</p>
    </div>
    <div className='card'>
      <img src={icon2} alt="icono 2"/>
      <strong>Components</strong>
      <p>Build encapsulated<br/>components that<br/>manage their state.</p>
    </div>
    <div className='card'>
      <img src={icon3} alt="icono 3"/>
      <strong>Single-Way</strong>
      <p>A set of immutable<br/>values are passed to<br/>the components.</p>
    </div>
    <div className='card'>
      <img src={icon4} alt="icono 4"/>
      <strong>JSX</strong>
      <p>Statically-typed,<br/>designed to run on<br/>modern browsers.</p>
    </div>
    </div>


  </div>





  );
}
export default App;
