function Cards (props) {
    console.log('props', props);
    return (
        <div>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <span>{props.text}</span>


        </div>
    );
}

export default Cards;
