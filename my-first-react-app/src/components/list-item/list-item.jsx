import './list-item.css'

function ListItem (props) {
    const { image, title, paragraph} = props;
    return (
        <div className="box-item">
            <div>
                <img className="item-img" src= { image } alt="" />
            </div>
            <div className="item-text">
                <h3> { title } </h3>
                <p> { paragraph } </p>
            </div>
        </div>
    )
}

export default ListItem;