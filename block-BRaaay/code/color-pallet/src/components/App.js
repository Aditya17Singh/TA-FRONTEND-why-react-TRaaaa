import color from "../colors.json";
import "../style.css";

function App() {
  return (
    <>
      {Object.keys(color).map((elm, i) => (
        <Colors info={elm} index={i} />
      ))}
    </>
  );
}

function Colors(props) {
  return (
    <>
      <section>
        <div className="color">
          <div>{props.info}</div>
          {color[props.info].map((e, i) => (
            <>
              <div className="container">
                <div
                  className="margin"
                  style={{
                    backgroundColor: e,
                    width: "80px",
                    height: "50px",
                  }}
                ></div>
                <div className="color">
                  <div>{i ? i*100: 50}</div>
                  <div>{e}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

