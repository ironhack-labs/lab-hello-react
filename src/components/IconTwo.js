const secondIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png";

function IconTwo() {
    return (
        <div className="iconsDetails">
            <img src={secondIcon} alt="icon number two" className="imgSize" />
            <h3>Components</h3>
            <p> Build encapsulated components that manage their state.</p>
        </div>

    )
}

export default IconTwo;