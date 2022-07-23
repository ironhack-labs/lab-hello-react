import logo from './logo.svg';
import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhack from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';


function App() {
  
 function Navbar(){
	return(
	<div>
		<nav>
			<img src={ironhack}/>
		 	<img src={menu}/>
		</nav>
	</div>
	)
 }

 function Body(){
	return(
	<div>
		<h1>Say hello to ReactJS</h1>
	</div>
	)

 } 



  return (
    <div className='App'>
	  <Navbar/>
	  <Body/>
    </div>
  );
}

export default App;
