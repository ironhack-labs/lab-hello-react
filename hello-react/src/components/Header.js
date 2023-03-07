import logo from '../images/ironhack-logo-xs.png'
import Button from './Button'
import menu from '../images/menu-top-xs.png'
function Header() {
    return (
        <div className=' bg-dark text-light m-4 p-5'>
            <nav className="navbar d-flex flex-row justify-content-between p-2">
                <a href=""><img src={logo} alt="Bootstrap"/></a>
                <a href=""><img src={menu} alt="..."/></a>
            </nav>
            <div className='col-4'>
                <strong><h1 className='display-1 fw-semibold'>Say hello to ReactJS</h1></strong>
                <p>You will lear how to use the most popular frontend library, and become a super Ninja developer</p>
                <Button text='Awesome!'/>
            </div>
        </div>
    )
}

export default Header