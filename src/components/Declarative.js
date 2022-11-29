import Img1 from "../images/img1.png"

function Declarative() {
    return(
        <div className="cards">
            <img className="imagesInfo" src={Img1} alt=""></img>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
    );
}

export default Declarative;

