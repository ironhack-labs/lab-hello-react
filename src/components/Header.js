import React from 'react'
import Icon from './../images/ironhack-logo-xs.png'
import Menu from './../images/menu-top-xs.png'

export default function Header() {
    return (
        <>

        <div className="ironHeader">
           
           <div className="nav">
            <div>
            <img src={Icon}/>
            </div>
           <div>
           <img src={Menu}/>
           </div>
           </div>
        <article> 
           <h1>Say hello to<br/>
         ReactJS
         </h1>
         <p>You will learn how to use the most
             popular frontend library, 
             and become a super Ninja Developer.
         </p>
         <a className="reactButton">
         Awesome!
         </a>
         </article>

        </div>
         

        </>
    )
}
