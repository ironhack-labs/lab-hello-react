// 1. Importación

import React from 'react'
import declarative from "./../images/icon1.png"
import component from "./../images/icon2.png"
import single from "./../images/icon3.png"
import jsx from "./../images/icon4.png"

// 2. Función

export default function Body() {
    return (
        <div class="body">
            <article class="decla">
                <img class="icon" src={declarative} alt="declarative" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p>
            </article>
            <article class="compo">
                <img class="icon" src={component} alt="component"/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state</p>
            </article>
            <article class="way">
                <img class="icon" src={single} alt="single-way" />
                <h3>Single way</h3>
                <p>A set of inmutable values are passed to the component's</p>
            </article>
            <article class="jsx">
                <img class="icon" src={jsx} alt="jsx" />
                <h3>JSX</h3>
                <p>Statically-tiped designed to run on modern browsers</p>
            </article>
        </div>
    )
}
