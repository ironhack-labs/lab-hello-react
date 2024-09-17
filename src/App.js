import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironh from  "./images/ironhack-logo-xs.png";
import menut from  "./images/menu-top-xs.png";

function App(){
  return (
    <div className="App">
      <section id="section1">
        <div id="nav">
          <img src={ironh} alt=""/>
          <img className="menut" src={menut} alt=""/>
        </div>
        <h1>Say Hello to <br/>ReactJS</h1>
        <p>You will learn how to use <br/>
          the most popular frontend library, <br/>
          and become a Super Ninja developer.</p>
        <div id="awesome">Awesome!</div>
      </section>
      <section id="section2">
        <div class="col">
          <img src={icon1} alt=""/>
          <h2>Declarative</h2>
          <p>React makes it<br/>painless to create <br/>interactive UIs.</p>
        </div>
        <div class="col">
          <img src={icon2} alt=""/>
          <h2>Components</h2>
          <p>Build encapsulated <br/>components that <br/>manage their state.</p>
        </div>
        <div class="col">
          <img src={icon3} alt=""/>
          <h2>Single-Way</h2>
          <p>A set of immutable <br/>values are passed to <br/>the component's.</p>
        </div>
        <div class="col">
          <img src={icon4} alt=""/>
          <h2>JSX</h2>
          <p>Statically-typed, <br/>designed to run on <br/>modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
