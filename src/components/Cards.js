import React from 'react';

function Cards(props){
    return(
        <div className="card">
            <div>
                <img src={props.img}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Cards