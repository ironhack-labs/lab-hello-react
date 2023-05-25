import React, { Component } from 'react';
import './CardContainer.css';
import Declarative from '../Cards/Declarative/Declarative';
import Components from '../Cards/Components/Components';
import JSX from '../Cards/JSX/JSX';
import SingleWay from '../Cards/SingleWay/SingleWay';

class CardContainer extends Component {
    render() {
        return (
            <section className="body-container">
                <Declarative />
                <Components />
                <SingleWay />
                <JSX />
            </section>
        )
    }
}

export default CardContainer;