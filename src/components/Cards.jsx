import React from "react";
import './Cards.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

export const Cards = () => {
    return (
        <div className="content-cards">
            <div className="card1">
                <img src={icon1} alt="icono 1" />
                <div className="text1">
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
            </div>
            <div className="card2">
                <img src={icon2} alt="icono 2" />
                <div className="text2">
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
            </div>
            <div className="card3">
                <img src={icon3} alt="icono 3" />
                <div className="text3">
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
            </div>
            <div className="card4">
                <img src={icon4} alt="icono 1" />
                <div className="text4">
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browser.</p>
                </div>
            </div>
        </div>
    )
}