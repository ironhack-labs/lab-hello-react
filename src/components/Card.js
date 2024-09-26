import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'

const Card = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="Ironhack's Logo" />
                <img src={menu} alt="Menu" />
            </nav>

            <div>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

                <button>Awesome!</button>
            </div>
        </div>
    )
}

export default Card