import React, { Component } from 'react';
import declarative from '../images/ironhack3.png';
import components from '../images/ironhack4.png';
import singleWay from '../images/ironhack5.png';
import jsx from '../images/ironhack6.png';


class Gallery extends Component {
    render() {
        return (
            <section class="gallery">
                <div class="each-gallery">
                    <img src={declarative} alt="declarative" />
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div class="each-gallery">
                    <img src={components} alt="components" />
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div class="each-gallery">
                    <img src={singleWay} alt="single-way" />
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's</p>
                </div>
                <div class="each-gallery">
                    <img src={jsx} alt="jsx" />
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers</p>
                </div>
            </section>
        )
    }
}

export default Gallery;