import contentArr from './contentArr';
export default function PageContent(){
    const mappedContent = contentArr.map(elem=> <ContentEntry imgUrl = {elem.imgUrl} title = {elem.title} text = {elem.text}/> )
    return(<div id="content-div">{mappedContent}</div>)
}

function ContentEntry(props){
    return (
        <div className='content-entry'>
            <img src={props.imgUrl} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}