import "./style.css"

export default function Tile(props) {
    const {tileImgSrc, tileImgAlt, tileTitle, tileText} = props;

    return (
        <>
        <div className="tile">
            <img src={tileImgSrc} alt={tileImgAlt}></img>
            <h1>{tileTitle}</h1>
            <p>{tileText}</p>
        </div>
        </>
    )


}