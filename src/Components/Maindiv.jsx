import Picture1 from '../assets/image1.png'
import Picture2 from '../assets/image2.png'
function Maindiv (){
    return (
        <div id='main-div'>
        <header>
        <img id= 'Ironhack-logo' src={Picture1}/>
        <img id= 'menu' src={Picture2}/>
        </header>
        <div id= 'body'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
        </div>
        </div>
    )
}

export default Maindiv;