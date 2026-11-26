import "./helloReact.css"
import ironhackLogo from "../ironhack-logo-xs.png"
import menuLogo from "../menu-top-xs.png"
import icon1 from "../icon1.png"
import icon2 from "../icon2.png"
import icon3 from "../icon3.png"
import icon4 from "../icon4.png"

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
        <img src={icon1} alt="Icon1"/>
        <h2 className="h2">Declarative</h2>
        <p className="p">React majes it painless to create interactive UIs</p>
        </div>
        <div>
        <img src={icon2}/>
        <h2 className="h2">Components</h2>
        <p className="p">Build encapsulated componets that manage their state.</p>
        </div>
        <div>
        <img src={icon3} alt="Icon3"/>
        <h2 className="h2">Single-Way</h2>
        <p className="p">A set of immutable values are passed to the component's.</p>
        </div>
        <div>
        <img src={icon4} alt="Icon4"/>
        <h2 className="h2">JSX</h2>
        <p className="p">Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default HelloReact