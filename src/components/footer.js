import Icon1 from "../images/icon1.png"
import Icon2 from "../images/icon2.png"
import Icon3 from "../images/icon3.png"
import Icon4 from "../images/icon4.png"

const Footer = ()=>{
    return(
        <div>
            <div className="footer">
                <div className="icons">
                <img src = {Icon1}/>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="icons">
                <img src = {Icon2}/> 
                <h1>Components</h1>
                <p>Build encapsulated components that manage their state</p>
                </div>
                <div className="icons">
                <img src = {Icon3}/> 
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed to the component´s</p>
                </div>
                <div className="icons">
                <img src = {Icon4}/> 
                <h1>JSX</h1>
                <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer