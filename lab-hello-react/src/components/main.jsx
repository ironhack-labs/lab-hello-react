

function MainSection (){
    return (
        <div className="main">
        <div className="black">
            <div className="header">
                <img alt="logo" src={require("../images/ironhack-logo-xs .png")}/>
                <img className="burger"alt="burger icon" src={require("../images/burger.png")}/>
            </div>
            <div className="textual">
                <h1 className="title">Say Hello to ReactJS</h1>
                <p className="description">You will learn how to use the most popular frontend library,
                and become a super Ninja developer.</p>
                <button className="button-cta">Awesome!</button>
            </div>
            </div>
        <div className="cards">
            <div className="card">
                <img alt="React is awesome" src={require("../images/tool_bolt.png")}/>
                <h1 className="card-title">Declarative</h1>
                <p>React makes it painless to create interactive UIs</p>
            </div>
            <div className="card">
            
                <img alt="React is great" src={require("../images/pen_computer.png")}/>
                <h1 className="card-title">Components</h1>                
                <p>Build encapsulated components that manage their state</p>
            </div>
            <div className="card">
                <img  alt="React is Amazing" src={require("../images/settings.png")}/>
                <h1 className="card-title">Single-way</h1>                
                <p>A set of immutable values are passed to the components'</p>
            </div>
            <div className="card">
                <img  alt="React is easy" src={require("../images/tool_bolt.png")}/>
                <h1 className="card-title">JSX</h1>                
                <p>React makes it painless to create interactive UIs</p>
            </div>


            
        </div>


        </div>
    )
}

export default MainSection