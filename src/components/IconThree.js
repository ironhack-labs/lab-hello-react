const thirdIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png";

function IconThree() {
    return (
        <div className="iconsDetails">
            <img src={thirdIcon} alt="icon number three" className="imgSize" />
            <h3>Single-Way</h3>
            <p> A set of immutable values are passed to the component's.</p>
        </div>

    )
}

export default IconThree;