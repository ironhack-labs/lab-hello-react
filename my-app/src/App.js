import './App.css';
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div>
      <div id="header">
      <nav className="nav"><img src={logo} alt='logo' /><img src={menu} alt='menu' /></nav>
      <div className="text">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <a href="">Awesome!</a>
      </div>
      </div>
      <div className='footer'>
        <div><img src={icon1} alt='icon1' /><h2>Declarative</h2><article>React makes it painless to create interacyive UIs</article></div>
        <div><img src={icon2} alt='icon2' /><h2>Componentes</h2><article>Build encapsulated componentes that manage their state</article></div>
        <div><img src={icon3} alt='icon3' /><h2>Single-Way</h2><article>A set of immutable values are passed to the component's</article></div>
        <div><img src={icon4} alt='icon4' /><h2>JSX</h2><article>Statically-typed, designed to run browsers.</article></div>
      </div>
    </div>
  );
}

export default App;
