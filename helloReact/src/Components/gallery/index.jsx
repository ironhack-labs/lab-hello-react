import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

function Gallery(){
    return(
        <div id="gallery">
            <ul id="gallery-list">
                <li>
                    <img id="first-image"src={icon1}/>
                    <h3>Declarative</h3>
                    <p>React makes it painfull to create interactive UIs.</p>
                </li>
                <li>
                    <img id="second-image" src={icon2}/>
                    <h3>Components</h3>
                    <p>Build incapsulated componentes that manage their state.</p>
                </li>
                <li>
                    <img id="third-image" src={icon3}/>
                    <h3>Single Way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </li>
                <li>
                    <img id="fourth-image" src={icon4}/>
                    <h3>JSX</h3>
                    <p>Statically typed designed to run on modern browsers.</p>
                </li>
            </ul>
        </div>
    )
}

export default Gallery;