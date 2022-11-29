import Declarative from "./Declarative";
import Components from "./Components";
import SingleWay from "./Single-Way";
import Jsx from "./Jsx";

function Info() {
    return(
        <section className="info">
            <Declarative/>
            <Components/>
            <SingleWay/>
            <Jsx/>
        </section>
    );
}

export default Info;