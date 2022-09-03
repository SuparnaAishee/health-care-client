import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
