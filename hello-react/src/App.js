import './App.css';
import Menu from './components/Menu'
import Logo from './components/Logo'
import Headline from "./components/Headline"
import Button from './components/Button'
import './index.css'

import Card from './components/Card'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import ReactIcon from './components/ReactIcon'

function App() {
  return (
    <div className="App">
      <header className="app-header bg-dark">
        <navbar className="navbar navbar-expand-sm navbar-dark bg-dark d-flex flex-row align-items-center justify-content-between pt-3">
          <Logo />
          <Menu />
        </navbar>

        <section className="section-container text-light">
          <Headline />
          <Button />
        </section>

        {ReactIcon("react-icon-1")}
        {ReactIcon("react-icon-2")}
        {ReactIcon("react-icon-3")}
      </header>
      <main>
        <div className="card-group">
          {Card(
            icon1,
            "Declarative",
            "React makes it painless to create interactive UIs."
          )}
          {Card(
            icon2,
            "Components",
            "Build encapsulated components that manage thier state."
          )}
          {Card(
            icon3,
            "Single-Way",
            "A set of immutable values are passed to the component's."
          )}
          {Card(
            icon4,
            "JSX",
            "Statically-typed, designed to run on modern browsers."
          )}
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App;
