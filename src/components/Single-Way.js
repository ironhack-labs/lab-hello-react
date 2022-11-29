import Img3 from "../images/img3.png"

function SingleWay() {
    return(
        <div className="cards">
            <img className="imagesInfo" src={Img3} alt=""></img>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
    );
}

export default SingleWay;