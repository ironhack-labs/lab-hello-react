function Box (props) {
    return (
        <div className="box">
            <div className="box-image">
                <img src={props.image} alt={props.title} width="120" height="120"/>
            </div>
            <div className="box-title">
                <h2>{props.title}</h2>
            </div>
            <div className="box-content">
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Box;