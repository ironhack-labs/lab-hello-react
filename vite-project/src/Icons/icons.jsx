export default function Icons( {image, title, p} ){
    return <>
    <div className = "icon-design" >     
            <img src={image} alt="icon-image" />
            <h3>{title}</h3>
            <p>{p}</p>
    </div>

    </>
}