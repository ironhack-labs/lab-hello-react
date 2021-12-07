import React from 'react'
import logo from "./../images/ironhack-logo-xs.png";
import menu from "./../images/menu.png"

// 2. Función

export default function Header() {
    return (
        <>
            <header class="header">
                <section>
                    <img class="logo" src={logo} alt="logo"/>
                    <img class="menu" src={menu} alt="menu" />
                </section>

                <section class="title">
                    <h1>Say hello to ReactJS</h1>
                    <h5>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h5>
                    <button class="button"> Awesome!</button>
                </section>


            </header>
        </>
    )
}