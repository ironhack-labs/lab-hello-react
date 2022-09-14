import './HeadlineSubtopic.css';
import './Subtopic.css';
import './ContentSubtopic.css';
import iconOne from '../imagens/icon1.png'
function SubtopicOne(){
    return(
        <div className ="subtopic">
        <img src={iconOne} alt={iconOne}/>
        <h1 id="healine-black" >Declarative</h1>
        <p className="content-subtopic" >React makes it painless to create interactive UIs.</p>
        </div>
    )
}
export default SubtopicOne