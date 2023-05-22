function Article (props){
    const {image, title, description} = props.characteristic
    return(
        <article className="article">
            <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export default Article;