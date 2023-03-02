import singleWayImg from "../images/singleway-img.png";

function SingleWay () {
    return (
        <div className="sectionTwo-element">
            <img src={singleWayImg} alt='singleWay-icon' />
            <h4> Single-Way </h4>
            <p>A set of immutable <br></br> values are passed to <br></br> the components.</p>
        </div>
    );
}

export default SingleWay;