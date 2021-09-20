import ironhackLogo from "../images/ironhack-logo-xs.png"
import menuTop from "../images/menu-top-xs.png"

export function SuperiorPart() {
	return (
		<div className="main-content">
			<div className="nav">
				<img src={ironhackLogo} className="logo" alt="" />
				<img src={menuTop} className="logo" alt="" />
			</div>
			<div className="title">
				<h1>Say hello to ReactJS</h1>
				<h4>You will learn how to user the most frontend library, and become a super Ninja developer.</h4>
				<button>Awesome!</button>
			</div>
		</div>
	)
}
