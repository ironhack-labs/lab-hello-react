
import menuimg from "../images/menu-top-xs.png"
import ironlogo from "../images/ironhack-logo-xs.png"
import declarative from "../images/icon1.png"
import components from "../images/icon2.png"
import singleway from "../images/icon3.png"
import jsx from "../images/icon4.png"

function Nav() {
    return (
        <>
            <nav className="App-header">
                <img className="Logo1" src={ironlogo} alt='logo' />
                <img className="Menu1" src={menuimg} alt='menu' />
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become
                    a super Ninja developer.</p>
                <button>Awesome!</button>
            </nav>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <img src={declarative} alt="" />
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div class="col">
                        <img src={components} alt="" />
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div class="col">
                        <img src={singleway} alt="" />
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the component's.</p>
                    </div>
                    <div class="col">
                        <img src={jsx} alt="" />
                        <h3>JSX</h3>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Nav