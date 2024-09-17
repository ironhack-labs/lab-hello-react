export default function Card(props){
    return(
        <div className="Card">
            <img src={props.card.img} alt="logo1"/>
            <h2>{props.card.name}</h2>
            <p>{props.card.description}</p>
        </div>
    )
}