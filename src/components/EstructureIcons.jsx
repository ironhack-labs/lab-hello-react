import icon1Logo from "../assets/images/icon1.png"
import icon2Logo from "../assets/images/icon2.png"
import icon3Logo from "../assets/images/icon3.png"
import icon4Logo from "../assets/images/icon4.png"


function EstructureIcons(){
    return(
        <section className="icons"> 
        <div id="icon1">
            <img src={icon1Logo} height={"140px"}/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive Uis.</p></div>

            <div id="icon2">
            <img src={icon2Logo} height={"140px"}/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
            </div>

            <div id="icon3">
            <img src={icon3Logo} height={"140px"}/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
            </div>

            <div id="icon4">
            <img src={icon4Logo} height={"140px"}/>
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers.</p> 
            </div>
        </section>
        
    )
}
export default EstructureIcons