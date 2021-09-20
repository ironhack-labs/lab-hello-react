import logo from './images/ironhack-logo-xs.png'
import menuImg from './images/menu-top-xs.png'

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

import './App.css'
import Card from './components/card.component'

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center ">
        <nav className="App-nav container d-flex flex-row justify-content-between py-4">
          <div>
            <img src={logo} />
          </div>
          <div>
            <img src={menuImg} />
          </div>
        </nav>

        <div className="container App-call-to-action">
          <div className="col-sm-12 col-md-7">
            <h1 className="mb-4">Say hello to ReactJS</h1>
            <h4 className="mb-5">
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </h4>
            <button type="button" className="btn btn-light mt-3">
              Awesome!
            </button>
          </div>
          <div className="col-sm-0 col-md-5"></div>
        </div>
      </header>
      <section className="container properties">
        <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
          <Card
            title="Declarative"
            text="React makes it painless to create interactive UI's"
            image={icon1}
          />
          <Card
            title="Components"
            text="Build encapsulated components that manage their state"
            image={icon2}
          />
          <Card
            title="Single-Way"
            text="A set of immutable values are passed to the component's"
            image={icon3}
          />
          <Card
            title="JSX"
            text="Statically-typed, designed to run on modern browsers."
            image={icon4}
          />
        </div>
      </section>
    </div>
  )
}

export default App
