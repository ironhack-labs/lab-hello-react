import React from 'react'
import Img1 from './../../images/icon1.png'
import Img2 from './../../images/icon2.png'
import Img3 from './../../images/icon3.png'
import Img4 from './../../images/icon4.png'

export default function Main() {
    return (
        <div className="container">
            <div> <img src={Img1}/> </div>
            <div> <img src={Img2}/> </div>
            <div> <img src={Img3}/> </div>
            <div> <img src={Img4}/> </div>
        </div>
    )
}
