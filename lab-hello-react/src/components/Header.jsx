import ironhack from '../images/ironhack.png';
import lines from '../images/lines.png';

function Header() {

    return (
        <div className="header">
            <div className="nav-bar">
            <img src={ironhack} alt="ironhack-logo" className="nav-img" />
            <img src={lines} alt="nav-bar-lines" className="nav-img" />
            </div>
            <div className="body">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>

        </div>

    )
}

export default Header;