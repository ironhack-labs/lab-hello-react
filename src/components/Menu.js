//import Menus css
import "./Menu.css"
//importing images
import Declarative from "./Declarative.png"
import Components from "./components.png"
import Singleway from "./singleWay.png"
import JSX from "././JSX.png"
//function for menu 
function Menu() {
    return(
        <div className="CenterAll">
            <div>
                <img className="Img-size-menu" src={Declarative} alt="Declarative" />
                <h3>Declarative</h3>
                <p>React makes it <br /> painless to create a interactive UIs.</p>
            </div>
            <div>
                <img className="Img-size-menu" src={Components} alt="Components" />
                <h3>Components</h3>
                <p>Build escapsulated components ,<br /> that mange their state.</p>
            </div>
            <div>
                <img className="Img-size-menu" src={Singleway} alt="Single Way" />
                <h3>Single-Way</h3>
                <p>A set of immutable values <br /> are passed to the componenet's.</p>
            </div>
            <div>
                <img className="Img-size-menu" src={JSX} alt="JSX" />
                <h3>JSX</h3>
                <p>Statically-typed, designed <br /> to run on modern browsers.</p>
            </div>
        </div>
    )
}
export default Menu;