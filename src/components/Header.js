// 1. IMPORTACIONES
import React from "react"

// 2, FUNCIONES
function Header(props) {


    console.log(props)

    return (

        <>
               <div class="header-style">
            <image src="./../images/icon1.png"></image>   
            <h1>Say Hello to ReactJS</h1>
          <p class="p-header">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          {/* <button>Awesome</button> */}

          </div>
            </>
    )


}



// 3. EXPORTACION

export default Header
