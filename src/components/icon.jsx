import React from 'react';



function Icon({img, title, text}) {
    return ( 
        <div className='icon'>
            <img src={img} alt="icon" />
            <h1>{title}</h1>
            <h4>{text}</h4>
        </div>
     );
}

export default Icon;