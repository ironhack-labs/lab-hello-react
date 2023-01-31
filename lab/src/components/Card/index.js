import Play from "../../images/monitor-play.png";
import style from "./style.module.css";
export function play() {
  const altText = "Monitor com play";

  return <img src={Play} alt={altText} className={style.play} />;
}

export function monitor() {
  const altText = "Monitor com tags";
  return <img src={monitor} alt={altText} className={style.monitor} />;
}
