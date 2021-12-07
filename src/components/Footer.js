// 1. IMPORTACIONES
import React from 'react'

// 2. FUNCION
function Footer(props){

    console.log(props);

    return (

          <p>footer. El nombre que pasamos fue: {props.nombre}</p>  


    )


}

// 3. EXPORTACION
export default Footer

