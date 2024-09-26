import React from 'react';
import ironhack from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';

function Navbar(){
	return(
	<div>
		<div className='icons'>
		<img src={ironhack} className='ironhack'/>
		<img src={menu} className='menu'/>
		</div>
		<div className='text-bar'>
		<h1>Say hello to <br/>ReactJS</h1>
		<p>You will how to use</p>
		<p>the most popular frontend library,</p>
		<p>and become a super Ninja developer.</p>
		<a><button className='botton'>Awesome!</button></a>
		</div>
	</div>
	)
 }

 export default Navbar;