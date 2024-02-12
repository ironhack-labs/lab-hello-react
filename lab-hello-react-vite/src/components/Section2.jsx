import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

function Section2() {

    const containerStyle= {
        display: "flex",
        backgroundColor: "white",
        color: "darkblue",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "80px"
    }
    const divsStyles= {
        flex: "1",
        margin: "40px",
        textAlign: "left",
        width: "20px",
        lineHeight:"1",
    }

    return(
        <div id="container" style={containerStyle}>
            <div style={divsStyles}>
                <img src={icon1} width="110px" alt="icon1" />
                <h2>Declarative</h2>
                <p>React makes it painless to cereate interactive UIs.</p>
            </div>
            <div style={divsStyles}>
                <img src={icon2} width="110px" alt="icon2" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div style={divsStyles}>
                <img src={icon3} width="110px" alt="icon3" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component´s.</p>
            </div>
            <div style={divsStyles}>
                <img src={icon4} width="110px" alt="icon4" />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>

    )
}

export default Section2