import Play from "../../images/monitor-play.png";
import style from "./style.module.css";
export function Card() {
  const altText = "Monitor com play";

  return <img src={Play} alt={altText} className={style.play} />;
}
