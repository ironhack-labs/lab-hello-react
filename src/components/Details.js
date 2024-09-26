import one from "../images/icon1.png"
import two from "../images/icon2.png"
import three from "../images/icon3.png"
import four from "../images/icon4.png"



function Details(){
    return (
       <div className="icons">
            <div className="benefits">
                <img src={one}  alt="icono"/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive Uls.</p>
            </div>
            <div className="benefits">
                <img src={two}  alt="icono"/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state</p>
            </div>
            <div className="benefits">
                <img src={three}  alt="icono"/>
                <h2>Single-Way</h2>
                <p>A set of inmutable values are passed to the components.</p>
            </div>
            <div className="benefits">
                <img src={four}  alt="icono"/>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
       </div> 
    );
}

export default Details;