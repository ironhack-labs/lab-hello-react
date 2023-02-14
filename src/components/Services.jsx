function Services(props) {
    return(
        <div className="Services">
            <img src={props.imgSrc} alt="Logo"/>
            <h3>{props.sublineServ}</h3>
            <p>{props.contentServ}</p>
        </div>
    )
}

export default Services