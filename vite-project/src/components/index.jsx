import '../App.css';
import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function BodyPage(){
    return (
        <div id="App">
            <nav id="nav-bar">
                <div>
                    <img src={logo} alt="Ironhack Logo" />
                    <img src={menu} alt="Menu top" />
                </div>
            </nav>
            <section id="welcome-information">
                <h1>Say hello to</h1>
                <h1>ReactJS</h1>
                <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </section>
            <section id="page-details">
                <div>
                    <img src={icon1} alt="declarative" />
                    <h2>Declarative</h2>
                    <p>React make it painless to create interactive UIs.</p>
                </div>
                <div>
                    <img src={icon2} alt="components" />
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src={icon3} alt="single way" />
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
                <div>
                    <img src={icon4} alt="js" />
                    <h2>JSX</h2>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </section>
        </div>
    )
}

export default BodyPage;