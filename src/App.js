import "./App.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { HomePage } from "./page/HomePage";
import {LoginPage} from "./page/LoginPage"

function App() {
  return (
    <div className="App">
        {/* <HomePage/> */}
        <LoginPage></LoginPage>
    </div>
  );
}

export default App;
