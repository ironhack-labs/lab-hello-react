//IMPORTACIONES
import React from 'react'
import declarative from "./../images/tools.png"
import component from "./../images/videos.png"
import single from "./../images/engine.png"
import jsx from "./../images/code.png"

// FUNCIÓN

export default function Body() {
    return (
        <div class="body">
            <article class="declarative">
                <img class="icon" src={declarative} alt="declarative" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p>
            </article>
            <article class="components">
                <img class="icon" src={component} alt="components"/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state</p>
            </article>
            <article class="single-way">
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