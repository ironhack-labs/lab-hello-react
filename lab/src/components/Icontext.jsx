function Icontext (props) {

    return(
        <div className="itext">
            <img src={props.imageSrc} alt = "picture"></img>
            <h1>{props.title}</h1>
            <bodytext>{props.body}</bodytext>
        </div>
    )
}

export default Icontext