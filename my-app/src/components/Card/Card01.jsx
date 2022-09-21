

function Card01(props) {
    return (
        <div id="card01">
        <img src=
        {props.src} alt={"logo_image"}
        />

        <h4>
        {props.title}
        </h4>

        <p>
        {props.desc}
        </p>
        </div>
    )
}

export default Card01;