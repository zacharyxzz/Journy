import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth";
import Home from "./components/pages/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/sign-up" Component={Auth} />
          <Route path="/login" Component={Login} />
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
