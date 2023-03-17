import "./App.css";
import Title from "./components/Title";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <Title />
      <Router>
        <Routes>
          <Routes>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
