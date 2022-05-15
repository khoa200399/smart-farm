import "./App.css";
import "./component/HumTemp";
import HumTemp from "./component/HumTemp";
import Control from "./component/Control";
import Info from "./component/Info"

function App() {
  return (
    <div className="App">
      <h1>Test Database</h1>
      <HumTemp></HumTemp>
      <hr />
      <Control></Control>
      <hr />
      <Info></Info>
    </div>
  );
}

export default App;
