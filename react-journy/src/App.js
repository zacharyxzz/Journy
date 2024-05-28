import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/sign-up" Component={Auth}/>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
