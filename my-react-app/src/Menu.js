import './App.css';
import React from 'react';

const Menu = ({image1, image2}) => {  
    return(
        <div className='nav'>
            <img src={image1}/>
            {/*je comprends pas lighe 9 height*/}
            <img src={image2} style={{height: '10%'} }/>
        </div>
    )
}
export default Menu