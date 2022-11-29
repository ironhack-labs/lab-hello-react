import uno from "../images/1.png"
import dos from "../images/2.png"
import tres from "../images/3.png"
import cuatro from "../images/4.png"

function Info (){
    return(
        <div className="flex">
            <div >
                <img src={uno} alt="1"></img>
                <h1>Declarative</h1>
                <p >React makes it <br/>
                painless<br/>
                interactive UIs</p>
            </div>
            <div>
                <img src={dos} alt="1"></img>
                <h1>Components</h1>
                <p>Build encpasulated</p>
                <p>components that</p>
                <p>manage their state</p>
            </div>
            <div>
                <img src={tres} alt="1"></img>
                <h1>Single-Way</h1>
                <p>A set of immutable</p>
                <p>values are passed to</p>
                <p>the component's</p>
            </div>
            <div>
                <img src={cuatro} alt="1"></img>
                <h1>JSX</h1>
                <p>Statically-typed</p>
                <p>designed to run on</p>
                <p>modern browsers</p>
            </div>
        </div>
    )
}
export default Info;