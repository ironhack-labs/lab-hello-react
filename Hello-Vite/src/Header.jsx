import React from 'react';
import Navbar from './navbar';
import Title from './Title';
import Button from './Button';
import './header.css';


function Header() {
    return (
        <header className="header">
            <Navbar  />
            <Title titleText="Say hello to ReactJS" description="You will learn how to use
        the most popular fronted library,
        an become a super Ninja developer." />
            <Button text="Awesome!" />
        </header>
    );
}

export default Header;