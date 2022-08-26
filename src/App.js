import logo from './images/logo.png';
import hamburger from './images/hamburger.png'
import declarative from './images/declarative.png'
import components from './images/components.png'
import singleWay from './images/single-way.png'
import jsx from './images/jsx.png'

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-between align-items-center dark-bg px-6 ">
        <div className="col text-start">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col text-end">
        <img src={hamburger} className="logo" alt="hamburger" />
        </div>
      </div>   
      <div className="row d-flex justify-content-start align-items-center full-h dark-blue-bg px-6">
        <div className="col-6">
          <h1 className='main-title'>
            Say hello to ReactJS
          </h1>
          <p className='main-text'>
            You will learn how to use <br/> the most popular frontend library,<br/> and become a super Ninja developer
          </p>
          <button class="btn btn-light main-botton mt-5" type="submit">
            Awsome!
          </button>
        </div>
      </div>
      <div className="row d-flex justify-content-around align-items-center px-6 white-bg full-h">
        <div className="col align-items-start">
        <div className="col text-start">
          <img src={declarative} className="icons" alt="declarative" />
        </div>
          <h3>
            Declarative
          </h3>
          <p>
            React makes it<br/>painless to create<br/>interactive UIs.
          </p>
        </div>
        <div className="col align-items-start">
        <div className="col text-start">
          <img src={components} className="icons" alt="components" />
        </div>
        <h3>
            Components
          </h3>
        <p>
            Build encapsulated<br/>components that<br/>manage their state.
          </p>
        </div>
        <div className="col align-items-start">
        <div className="col text-start">
          <img src={singleWay} className="icons" alt="singleWay" />
        </div>
        <h3>
            Single-Way
          </h3>
          <p>
            A set of immutable<br/>values are passed to<br/>the component's
          </p>
        </div>
        <div className="col align-items-start">
        <div className="col text-start">
          <img src={jsx} className="icons" alt="jsx" />
        </div>
        <h3>
            JSX
          </h3>
          <p>
            Statically-typed<br/>designed to run on<br/>modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
