import ImageOne from "../images/ImageOne"
import ImageTwo from '../images/ImageTwo';

const Header = () => {
    return (
        <div>
        <nav className='nav'>
            <ImageOne />
            <ImageTwo />
        </nav>
        <div className="head body">
        <h1 className="main head">Say hello to ReactJS</h1>
        <p className="head para">You will learn how to use the most popular
        frontend library, and become a super Ninja developer.</p>
        <button className="head btn">Awesome!</button>
        </div>
        </div>
    )
}

export default Header