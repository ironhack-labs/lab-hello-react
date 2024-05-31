function Tarjeta({imagen, titulo, texto}){
    return(
        <div className="card" style={{width: "12rem"}}>
<img src={imagen} className="card-img-top" alt={titulo}></img>
<div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{texto}</p>
    
</div>
</div>
    )
}
export default Tarjeta