import { useState } from "react";
import { Route, Routes } from "react-router";
import "./app.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
