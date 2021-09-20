function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-menu">
                <div className="logo-img">
                    <img src="images/ironhack-logo-xs.png" />
                </div>
                <div className="menu-img">
                    <img src="images/menu-top-xs.png" />
                </div>
            </div>
            <div className="navbar-info">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use<br/> the most popular frontend library,<br/> and become a super Ninja developer.</p>
            </div>
            <button>Awesome!</button>
        </div>
    )
}

export default Navbar