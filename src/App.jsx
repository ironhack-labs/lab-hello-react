import "./App.css"
import logo from "./assets/ironhack-logo.png"
import dropdown from "./assets/dropdown.png"
import declarative from "./assets/declarative.png"
import components from "./assets/components.png"
import singleWay from "./assets/single-way.png"
import jsx from "./assets/jsx.png"

function App() {
    return (
        <div className="App">
            <div id="dark-container">
                <nav>
                    <img className="navbar-image" src={logo} />
                    <img className="navbar-image" src={dropdown} />
                </nav>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
            <div id="light-container">
                <article>
                    <img className="article-image" src={declarative} />
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
                <article>
                    <img className="article-image" src={components} />
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </article>
                <article>
                    <img className="article-image" src={singleWay} />
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </article>
                <article>
                    <img className="article-image" src={jsx} />
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </article>
            </div>
        </div>
    )
}

export default App
