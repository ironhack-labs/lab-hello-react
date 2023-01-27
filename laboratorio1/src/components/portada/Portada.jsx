import React from "react";
import '../portada/portada.css'

export const Portada = () => {
    return (
        <div className="hero">
            <div className="text">
                <h1 className="title">Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            </div>
            <div className="divbtn">
                <button className="btn">Awesome!</button>
            </div>
        </div>
    )
}

export default Portada