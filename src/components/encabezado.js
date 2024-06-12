import ironHackLogo from '../images/ironHackLogo.png'
import hamburguerMenu from '../images/hamburguerMenu.png'

function Encabezado(){
	return (
	<div className='header'>
		<div className='nav-bar'>
			<img className='logo' src={ironHackLogo} alt="Iron Hack Logo" />
		  <img className='logo' src={hamburguerMenu} alt="Menu"/>
		</div>
		<div className='say-hello'>
			<div>
			<h1 className='sayHello'>Say Hello to ReactJS</h1>
			</div>
			<div>
			<p>You will learn how to use the most popular frontend library, ande bedome a super ninja developer</p>
			</div>
			<div>
			<button className='button'>Awesome!</button>
			</div>
		</div>
	</div>
	);
}


export default Encabezado;