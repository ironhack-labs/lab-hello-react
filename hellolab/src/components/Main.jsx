function Main () {
    const logo = require('../../src/images/ironhack-logo-xs.png');
    const menu = require('../../src/images/menu-top-xs.png');

    return (
        <div className="maindiv">
            <div className="menu">
                <div className="menu-logo">
                    <img src={logo} alt="Ironhack logo" width="45" height="45"/>
                </div>
                <div className="menu-image">
                    <img src={menu} alt="Menu" width="15" height="15"/>
                </div>
            </div>
            <div className="main-box">
                <h1>Say hello to</h1>
                <h1>ReactJS</h1>
                <p>You will learn how to use</p>
                <p>the most popular frontend library</p>
                <p>and become a super Ninja developer</p>
                <button>Awesome!</button>
            </div>
        </div>
    );
}

export default Main;