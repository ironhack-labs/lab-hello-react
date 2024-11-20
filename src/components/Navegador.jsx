// import Ficha from "./Ficha"
import toolsImg from "../assets/icon1.png"
import componentsImg from "../assets/icon2.png"
import valuesImg from "../assets/icon3.png"
import tagsImg from "../assets/icon4.png"

function Navegador(){
    return (
        <div className="navegador">
            <div className="ficha">
                <img src={toolsImg} alt="" />
                <div className="texto">
                    <h3>Declarative</h3>
                    <p>Reacts makes it painless to create insteractive UIs.</p>
                </div>
            </div>
            <div className="ficha">
                <img src={componentsImg} alt="" />
                <div className="texto">
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
            </div>
            <div className="ficha">
                <img src={valuesImg} alt="" />
                    <div className="texto">
                    <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component&lsquo;s.</p>
                </div>
            </div>
            <div className="ficha">
                <img src={tagsImg} alt="" />
                    <div className="texto">
                    <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    )
}

export default Navegador