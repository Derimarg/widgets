import "./App.css";
import { widgets } from "./components/Card/widgetObj";

function App() {
  return (
    <div className="App">
      <h1>Widgets App</h1>
      <p>Display a Widget preview build with HTML, CSS and JavaScript</p>

      <div>
        {widgets.map((widget, idx) => (
          <div key={idx} className="card">
            <div>
              <div
                style={{
                  background: "#171717",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                {widget.Name}
              </div>
              <p
                style={{
                  padding: "5px",
                }}
              >
                {widget.Description}
              </p>
              <div
                style={{
                  padding: "5px",
                }}
              >
                <div>{widget.DisplayComponent}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
