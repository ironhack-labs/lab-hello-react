import "./navbar.css"

function Navbar() {
     
const image1 = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png";
const image2 = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png";

    return (
        <div className="navbar-container">
            <img src={image1} alt="logo" />
            <img src={image2} alt="hamburguer" />
        </div>
    )
}

export default Navbar;

