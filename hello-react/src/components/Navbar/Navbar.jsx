import './Navbar.css'


function Navbar(props) {
    const {logo, hamMenu} = props

    return (
        <div className="Navbar">
            <img className="logo" src={logo}></img>
            <img className="hamMenu" src={hamMenu}></img>
        </div>
    )
}

export default Navbar