// 1. IMPORTACIONES
import React from 'react'
import Pictures from './Pictures'
import icon1 from "./../../images/icon1.png"
import icon2 from "./../../images/icon2.png"
import icon3 from "./../../images/icon3.png"
import icon4 from "./../../images/icon4.png"

// 2. FUNCIONES

function Main (){
    const pictureList = [
        {   picture: "/images/icon1.png"

        },

        {
            picture: "/images/icon2.png"    


        }

    

    ]

    return (
        <>
            <ul>
                <li><img src={icon1}/></li>
                <li><img src={icon2}/></li>
                <li><img src={icon3}/></li>
                <li><img src={icon4}/></li>
                
            </ul>



        </>


    )

}

// 3. EXPORTACION
export default Main



    

