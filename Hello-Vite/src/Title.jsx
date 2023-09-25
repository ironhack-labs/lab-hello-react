import "./Title.css"

function Title({ titleText, description }) {
    return (
        <div>
            <h1 className="title">{titleText}</h1>
            <p className="description">{description}</p>
        </div>
    )
}

export default Title;