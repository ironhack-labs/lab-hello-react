// src/App.js
import "./App.css"
import Navbar from "./components/Navbar"
import Button from "./components/Button"
import Feature from "./components/Feature"

import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <main>
      <Navbar></Navbar>
        <h1>
          Say hello to
          <br />
          ReactJS
        </h1>
        <p>
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <Button text="Awesome!"></Button>
      </main>
      <section className="features-section">
        <Feature
          image={icon1}
          alt="Feature Icon #1"
          heading="Declarative"
          description="React makes it painless to create interactive UIs"
        />
        <Feature
          image={icon2}
          alt="Feature Icon #2"
          heading="Declarative"
          description="React makes it painless to create interactive UIs"
        />
        <Feature
          image={icon3}
          alt="Feature Icon #3"
          heading="Declarative"
          description="React makes it painless to create interactive UIs"
        />
        <Feature
          image={icon4}
          alt="Feature Icon #4"
          heading="Declarative"
          description="React makes it painless to create interactive UIs"
        />
      </section>
    </div>
  )
}
export default App
