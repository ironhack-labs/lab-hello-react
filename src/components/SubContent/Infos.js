import './infos.css'

function Infos(props) {
    const {img, title, description} = props;
    return (
        <div className="infos">
            <img src={img} alt="img"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Infos;