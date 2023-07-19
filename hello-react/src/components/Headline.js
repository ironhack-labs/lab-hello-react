import Button from "./Button";

const Headline = () => {
    return(
        <div className="headline">
            <h1>Say hello to <br/>ReactJS</h1>
            <p>
                You will learn how to use <br/>
                the most popular frontend library, <br/>
                and becom super ninja developer.
            </p>

            <Button />
        </div>
    )
}

export default Headline;