
function Properties ( { image, title, text }) {
    return (
        <div className="property">
            <img src={image} alt={title}/>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    )
}
export default Properties