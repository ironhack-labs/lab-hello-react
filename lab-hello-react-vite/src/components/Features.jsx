import React from "react";
import Icon1 from "../assets/icon1.png"
import Icon2 from "../assets/icon2.png"
import Icon3 from "../assets/icon3.png"
import Icon4 from "../assets/icon4.png"

function Features(){
    return(
        <div className="features">
            <div className="info">
                <img src={Icon1} alt="Icon1"></img>
                <h2>Declarative</h2>
                <p>React bla bla...</p>
            </div>

            <div className="info">
                <img src={Icon2} alt="Icon2"></img>
                <h2>Components</h2>
                <p>React bla bla...</p>
            </div>

            <div className="info">
                <img src={Icon3} alt="Icon3"></img>
                <h2>Single-Way</h2>
                <p>React bla bla...</p>
            </div>

            <div className="info">
                <img src={Icon4} alt="Icon4"></img>
                <h2>JSX</h2>
                <p>React bla bla...</p>
            </div>
        </div>
    )
}

export default Features;