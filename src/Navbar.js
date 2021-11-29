import LogoIron from "./components/LogoIron";
import SideBar from "./components/SideBar";
import './App.css';

// here instead of Navbar could be a Headline

function Navbar() {
    return (
        <div style={{
            backgroundColor: '#1F2535',
            width: '30em',
            height: '25em'
        }}>
            <div className="inline">
                <SideBar />
                <LogoIron />
            </div>
            <div className="helloText">
                <h1> Say hello to ReactJS</h1>
                <h5> You will learn how to use the most popular frontend library and become a super Ninja developer.</h5>
                <button className="white-button"> Awesome! </button> {/* we can do a component for this button as well */}
            </div>

        </div>

    )
}

export default Navbar;