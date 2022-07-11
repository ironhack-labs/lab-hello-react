// src/App.js
import logo from './images/ironhack-logo-xs.png'
import menuImg from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import './App.css';

function App() {
  return (

    <div className="App">


      <div id="div-imagenes">
        <nav>
          <img id="imagen1" src={logo} alt="logo" />
          <img id="imagen2" src={menuImg} alt="menu" />
        </nav>

        <h2>Say hello to ReactJS</h2>
        <p id="texto">You will learn how to use the most popular frontend library, and
          become a super Ninja developer.</p>
        <button class="btn">Awesome!</button>
      </div>

      <div id="div-cuerpo">
      
        <div className="tarjeta">
          <img className="image" src={icon1} alt="icono1" />
          <h3> Declarative </h3>
          <p>React makes it painless to create interactive UI's</p>
        </div>

        <div className="tarjeta">
          <img className="image" src={icon2} alt="icono2" />
          <h3> Components </h3>
          <p>Build encapsulated components that manage their state</p>
        </div>

        <div className="tarjeta">
          <img className="image" src={icon3} alt="icono3" />
          <h3> Single-Way </h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>

        <div className="tarjeta">
          <img className="image" src={icon4} alt="icono4" />
          <h3> JSX </h3>
          <p>Statically-typed, designed to run on modern browsers. </p>
        </div>
      </div>


    </div>
  );
}
export default App;

