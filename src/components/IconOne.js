
//!in this case we can do in another way, that we have already the image inside the folder (local), so we need to import it and then use it. so we can use this:
// import iconOne = "./../images/icon1.png";


const firstIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png";

function IconOne() {
    return (
        <div className="iconsDetails">
            <img src={firstIcon} alt="icon number one" className="imgSize" />
            <h3>Declarative</h3>
            <p> React makes it painless to create interactive Uls.</p>
        </div>

    )
}

export default IconOne;