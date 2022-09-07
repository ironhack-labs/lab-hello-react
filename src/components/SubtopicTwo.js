import './HeadlineSubtopic.css';
import './Subtopic.css';
import './ContentSubtopic.css';
import iconTwo from '../imagens/icon2.png'
function SubtopicTwo(){
    return(
        <div className ="subtopic">
        <img src={iconTwo} alt={iconTwo}/>
        <h1 id="healine-black" >Components</h1>
        <p className="content-subtopic">Build encapsulated components that manage their state.</p>
        </div>
    )
}
export default SubtopicTwo