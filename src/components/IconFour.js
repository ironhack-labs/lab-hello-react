const fourthIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png";

function IconFour() {
    return (
        <div className="iconsDetails">
            <img src={fourthIcon} alt="icon number four" className="imgSize"/>
            <h3>JSX</h3>
            <p> Statically-typed, designed to run on modern browsers.</p>
        </div>

    )
}

export default IconFour;
