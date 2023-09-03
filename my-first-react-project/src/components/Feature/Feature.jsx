import './Feature.css'

function Feature(props) {
    const { image, title, description } = props

    return (
        <div className='feature-card'>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Feature