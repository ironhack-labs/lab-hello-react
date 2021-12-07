

// 1. IMPORTACIONES
import React from 'react'

// 2. EXPORTACION DE FUNCION

export default function Pictures(props){

    const list  = props.list

return (
    <>
        {
            list.map((e) => {
                return (
                    <div>
                        {e.picture}
                    </div>
                )



            })


        }

    </>



)




}




