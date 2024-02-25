import "./App.css";
import content from "./Content";

function App() {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1 style={{ marginLeft: "40%", fontFamily: "initial" }}>
            Various Doctor Images
          </h1>
        </div>

        <div className="new">
          <div className="slide-content">
            {content.map((val) => (
              <div className="slide-image">
                <img src={val.image}></img>
                <div className="description">{val.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
