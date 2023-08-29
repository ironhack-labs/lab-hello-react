import Button from '../button/Button';
import Nav from '../nav/Nav';

import './Header.css';


function Header () {
    return (
        
        <div className='header'>
        <div className='container'>
        <Nav />
        <h1 className='h1-header'> Say hello to ReactJs </h1>
        <p className='p-header'>You will learn how to use the most popular fronted library, and become a super Ninja developer </p>
        <Button />
        </div>

        </div>
    )
}

export default Header;