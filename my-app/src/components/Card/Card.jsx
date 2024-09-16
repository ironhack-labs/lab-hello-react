import Card01 from "./Card01";
import Icon01 from "../../images/icon1.png";
import Icon02 from "../../images/icon2.png";
import Icon03 from "../../images/icon3.png";
import Icon04 from "../../images/icon4.png";
import { v4 as uuidv4 } from 'uuid';

function Card() {
   const data = [
    {src: Icon01, 
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"
    },
    {src: Icon02, 
    title: "Components",
    description: "Build encapsulated components"
    },
    {src: Icon03, 
    title: "Single-Way",
    description: "A set of immutable values"
    },
    {src: Icon04, 
    title: "JSX",
    description: "Statically-typed"
    },
   ]
   
    return (
        <div>
        {data.map((card) => {
        return <Card01 
        key={uuidv4()} 
        src={card.src}
        title={card.title}
        description={card.description}
        />
       })}
        </div>
      
    );
}

export default Card;