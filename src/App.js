import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Help from "./pages/About.js";
import About from "./pages/About.js";
import SignIn from "./pages/SignIn.js";
import Private from "./pages/private/Private.js";
import PrivateHome from "./pages/private/private-home/PrivateHome.js";

function App() {
  return (
    <div className="md:w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<privateHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
