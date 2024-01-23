import "./index.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
