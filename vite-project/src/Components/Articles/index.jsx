import screwdriver from '../../assets/screwdriver.png'

function FourSlot(){
    return(
    <div class="article-div">
        <div class="article-subdiv">
            <img src={screwdriver}/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
        </div>
        <div class="article-subdiv">
            <img src={screwdriver}/>
            <h2>Components</h2>
            <p>React makes it painless to create interactive UIs</p>
        </div>
        <div class="article-subdiv">
            <img src={screwdriver}/>
            <h2>Single-Way</h2>
            <p>React makes it painless to create interactive UIs</p>
        </div>
        <div class="article-subdiv">
            <img src={screwdriver}/>
            <h2>JSX</h2>
            <p>React makes it painless to create interactive UIs</p>
        </div>
    </div>
    )
}

export default FourSlot;