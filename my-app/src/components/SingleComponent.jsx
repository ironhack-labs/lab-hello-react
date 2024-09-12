import logo from '../images/ironhack-logo-xs.png'
import burgermenu from '../images/menu-top-xs.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

function SingleComponent(){
    return(
        <div>
            <section id='section1'>
                <nav id='navbar'>
                    <img src={logo} alt="ironhacklogo" />
                    <img src={burgermenu} alt="burguermenu" />
                </nav>
                <div id='section1div'>
                    <h1 id='section1h'>Say hello to<br/>ReactJS</h1>
                    <p id='section1p'>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
                    <button>Awesome!</button>
                </div>
            </section>

            <section id='section2'>
                <div>
                    <img src={icon1} alt="icon1img" />
                    <h1>Declarative</h1>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div>
                    <img src={icon2} alt="icon2img" />
                    <h1>Components</h1>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src={icon3} alt="icon3img" />
                    <h1>Single Way</h1>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
                <div>
                    <img src={icon4} alt="icon4img" />
                    <h1>JSX</h1>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
                </section>
        </div>
    )
}

export default SingleComponent