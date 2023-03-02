import declarativeImg from "../images/declarative-img.png";

function Declarative () {
    return (
        <div className="sectionTwo-element">
            <img src={declarativeImg} alt='declarative-icon' />
            <h4> Declarative </h4>
            <p>React makes it <br></br> painles to create <br></br> interactive uIs.</p>
        </div>
    );
}

export default Declarative;