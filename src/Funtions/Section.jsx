import IconSetting from "../images/setting.png";
import IconDraw from "../images/draw.png";
import IconDatas from "../images/datas.png";
import IconJava from "../images/java.png";

function Section() {
  return (
    <>
    <div className="container col-lg-8 mt-3 p-5">
      <div className="card-group">
        <div className="row justify-content-center">

          <div className="col-lg-3">
            <div className="card mx-auto w-100 border-0">
              <img src={IconSetting} style={{ width: "130px", height: "auto" }} className="card-img-top" alt="" />
              <h5 className="card-title">Declarative</h5>
              <p className="card-text">
                React makes it painless to create interactive ULs.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card mx-auto w-100 border-0">
              <img src={IconDraw} style={{ width: "130px", height: "auto" }} className="card-img-top" alt="" />
              <h5 className="card-title">Components</h5>
              <p className="card-text">
                Build encapsulated components that manage their state. 
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card mx-auto w-100 border-0">
              <img src={IconDatas} style={{ width: "130px", height: "auto" }} className="card-img-top" alt="" />
              <h5 className="card-title">Single-Way</h5>
              <p className="card-text">
                A set of immutable values are passed to the component's. 
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card mx-auto w-100 border-0">
              <img src={IconJava} style={{ width: "130px", height: "auto" }} className="card-img-top" alt="" />
              <h5 className="card-title">JSX</h5>
              <p className="card-text">
                Statically-typed, designed to run on modern browsers. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
export default Section;