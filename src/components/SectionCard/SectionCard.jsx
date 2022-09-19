function SectionCard(props){
    return(
        <div className ="Card">
            <img src={props.src} alt={"card_img"}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default SectionCard;