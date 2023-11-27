import ButtonConfirm from "../ButtonConfirm";
import "./style.css";

export default function HeroBannerLeft() {
    return(
        <>
        <div className="herobanner-left">
            <div className="herobanner-left-items">
            <h1>Say Hello to React Js</h1>
            <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
            <ButtonConfirm text="Awesome!" />
            </div>
        </div>
        </>
    )
}