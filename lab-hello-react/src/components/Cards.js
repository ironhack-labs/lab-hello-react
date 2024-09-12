import './Cards.css';

const Cards = (props)=>{
   console.log(props, 'estas son las props') 
   return (
        <div className="contenido-cards">
            <img src={props.imagen}/>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
        
        </div>
    )
} 

export default Cards
