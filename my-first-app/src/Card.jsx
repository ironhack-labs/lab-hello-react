export default function Card( {image, title, p} ){
    return <>
    <div className = "card-design" >     
            <img src={image} alt="card-image" />
            <h3>{title}</h3>
            <p>{p}</p>
    </div>

    </>
}