import logoImg from './../images/ironhack-logo-xs.png';
import menuImg from './../images/menu-top-xs.png';

function Header({ headline, text, button }) {
	return (
		<header>
			<div className="content">
				<img className="logo" src={logoImg} alt="" />
				<img className="menu" src={menuImg} alt="" />
				<h1>{headline}</h1>
				<p>{text}</p>
				<button>Awesome</button>
			</div>
		</header>
	);
}

export default Header;
