import "./App.css"
import Button from "./components/Button"
import Gallery from "./components/Gallery"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row dark" style={{ height: "40vh", textAlign: "left", padding: "20px 0 0 80px" }}>
        <div className="col">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        </div>
        <div>
          <Button mode="outline-" color="light" text="Awesome!" />
        </div>
      </div>
      <div style={{margin: "20px 0 0 0"}}>
        <Gallery />
      </div>
    </div>
  )
}

export default App
