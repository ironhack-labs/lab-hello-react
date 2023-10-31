import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

function Descriptions (){
    return (
        <div id = "descriptions">
            <div>
            <img src={icon1} alt="example" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIIs</p>
            </div>
            <div>
            <img src={icon2} alt="example" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
            </div>
            <div>
            <img src={icon3} alt="example" />
            <h3>Single Way</h3>
            <p>A set of immutable values are passed to the components</p>
            </div>
            <div>
            <img src={icon4} alt="example" />
            <h3>JSX</h3>
            <p>Strategically typed and designed to run on modern browsers</p>
            </div>

        </div>
        
    )
}

export default Descriptions