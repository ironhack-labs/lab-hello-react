// import header css
import "./Header.css"
// function for Header
function Header() {
    return(
        <div className="header-color">
            <div>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use <br />
                the most popular frontend library,<br />
                and become a super ninja developer.
                </p>
                <button className="button-header">Awesome</button>
            </div>
            
        </div>
    )
}
export default Header;