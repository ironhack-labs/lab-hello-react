import NavBar from "./NavBar";


function Header(){
    return(
        <div id="header">
            <NavBar/>
            <div id="subheader">
                <h1>Say hello to React JS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
                <button>Awesome</button>
            </div>
        </div>
    );
}

export default Header;