import Button from '../button/Button';

import './Header.css';


function Header () {
    return (
        <div className='header'>
        <h1 className='h1-header'> Say hello to ReactJs </h1>
        <p className='p-header'>You will learn how to use the most popular fronted library, and become a super Ninja developer </p>
        <Button />

        </div>
    )
}

export default Header;