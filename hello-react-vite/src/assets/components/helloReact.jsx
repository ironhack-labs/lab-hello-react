import "./helloReact.css"
import ironhackLogo from "../ironhack-logo-xs.png"
import menuLogo from "../menu-top-xs.png"

function HelloReact () {
  return(
    <div className="HelloReact">
      <div className="first">
        <div className="header">
          <img src={ironhackLogo}></img>
          <img className="menu" src={menuLogo}></img>
        </div>
        <h1 className="title">Say hello to ReactJS</h1>
        <p className="text">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button className="button">Awesome!</button>
      </div>
      <div className="icons">
        <div>
        <img src="src\assets\icon1.png" alt="Icon1"/>
        <h2 className="h2">Declarative</h2>
        <p className="p">React majes it painless to create interactive UIs</p>
        </div>
        <div>
        <img src="src\assets\icon2.png" alt="Icon2"/>
        <h2 className="h2">Components</h2>
        <p className="p">Build encapsulated componets that manage their state.</p>
        </div>
        <div>
        <img src="src\assets\icon3.png" alt="Icon3"/>
        <h2 className="h2">Single-Way</h2>
        <p className="p">A set of immutable values are passed to the component's.</p>
        </div>
        <div>
        <img src="src\assets\icon4.png" alt="Icon4"/>
        <h2 className="h2">JSX</h2>
        <p className="p">Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default HelloReact