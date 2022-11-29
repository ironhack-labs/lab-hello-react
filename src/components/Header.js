import TitleText from "./TitleText";
import HeaderButton from "./HeaderButton";

function Header() {
    return(
        <section className="header">
            <div className="text">
                <TitleText/>
                <HeaderButton/>
            </div>
        </section>
    );
}

export default Header;