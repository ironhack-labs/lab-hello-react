import ironhackLogo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="d-flex justify-content-between">
          <img src={ironhackLogo} alt="Ironhack Logo" className="p-4"/>
          <img src={menu} alt="Menu" className="mx-2 p-5"/>
        </div>
        <h1 className="text-light fw-bold m-4 ps-3">
          Say hello to <br></br>
          ReactJS
        </h1>

        <h5 className="text-light m-4 ps-3">
          You will learn how to use <br></br>the most popular frontend library,<br></br>
          and become a super Ninja developer.
        </h5>
        <div className="ms-4 ps-3 pb-5">
          <button className="btn btn-light fw-bold btn-lg">Awesome!</button>
        </div>
      </header>
      <div className="container pt-5">
        <div className="row">
        <div className="col">
          <img src={icon1} alt="Declarative" className="Icon"/>
          <h2 className="ms-3">Declarative</h2>
          <p className="ms-3">React makes it <br></br>painless to create <br></br>interactive UIs.</p>
        </div>
        <div className="col">
          <img src={icon2} alt="Components" className="Icon"/>
          <h2 className="ms-3">Components</h2>
          <p className="ms-3">Build encapsulated <br></br>components that <br></br>manage their state.</p>
        </div>
        <div className="col">
          <img src={icon3} alt="Single-Way" className="Icon"/>
          <h2 className="ms-3">Single-Way</h2>
          <p className="ms-3">A set of immutable <br></br>values are passed to <br></br>the component's.</p>
        </div>
        <div className="col">
          <img src={icon4} alt="JSX" className="Icon"/>
          <h2 className="ms-3">JSX</h2>
          <p className="ms-3">Statically-typed, <br></br>designed to run on <br></br>modern browsers.</p>
        </div>
        </div>
        
      </div>
    </div>
  );
}
export default App;
