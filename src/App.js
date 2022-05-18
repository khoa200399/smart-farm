import "./App.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
