import './App.css';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <h1>Say hello to ReactJS</h1>
      <h3>You will learn how to use
      the most popular frontend library
      and become a super Ninja developer</h3>
      <div className="icono1">
      <img src={icon1}/>
      </div>
      <h2>Declarative</h2>
      <p>React makes it 
        paineless to create
        interactive Uls.
      </p>
      

      <div className="icono2">
      <img src={icon2}/>
      </div>
      <h2>Components</h2>
      <p>Build encapsulated
        Components that 
        manage their state.
      </p>
      

      <div className="icono3">
      <img src={icon3}/>
      </div>
      <h2>Single-Way</h2>
      <p>A set of immutable
        values are passed to
        the components.
      </p>
      

      <div className="icono4">
      <img src={icon4}/>
      <h2>JSX</h2>
      <p>Statically-typed,
        designed to run on
        modern browsers.
      </p>
      </div>
    </div>
  );
}
export default App;