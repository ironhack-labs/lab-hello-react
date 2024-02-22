import image2 from "./images/icon-2.png"
import image3 from "./images/icon-3.png"
import image4 from "./images/icon-4.png"
import image5 from "./images/icon-5.png"
import './index.css/'

function SecondComponent() {

    return(
        <div id="icons">

            <div className="card">
                <img src={image2} alt="" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="card">
                <img src={image3} alt="" />
                <h2>Components</h2>                
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="card">
                <img src={image4} alt="" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className="card">
                <img src={image5} alt="" />
                <h2>JSX</h2>
                <p>Statically-typed designed to run on modern browsers.</p>
            </div>
        
        </div>
    )
}

export default SecondComponent