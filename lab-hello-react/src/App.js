
import './App.css';
import logo from './images/logo.png';
import menu from './images/menu.png';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import pic3 from './images/pic3.png';
import pic4 from './images/pic4.png';


function App() {
  return (
    <div className="App">
      <div id="container"><navbar className="menu"><img src={logo} alt="logo" className="left-img"/><img src={menu} alt="menu" className="right-img"/></navbar>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <button className="rounded">Awesome!</button></div>
      <div id="content">
      <div className="tile"><img src={pic1} alt="logo" className="img-tile"/><h2>Declarative</h2><p>React makes it painless to create interactive UIs.</p></div>
      <div className="tile"><img src={pic2} alt="logo" className="img-tile"/><h2>Components</h2><p>Build encapsulated components that manage their state.</p></div>
      <div className="tile"><img src={pic3} alt="logo" className="img-tile"/><h2>Single-Way</h2><p>A set of immutable values are passed to the component's.</p></div>
      <div className="tile"><img src={pic4} alt="logo" className="img-tile"/><h2>JSX</h2><p>Statically-types. designed to run on modern browsers.</p></div>
      </div>
    </div>
  );
}

export default App;
