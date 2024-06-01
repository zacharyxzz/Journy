import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth";
import Home from "./components/pages/Home";
import { Login } from "./components/Login";
import Dashboard from "./components/pages/DashBoard";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/utils/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" exact />
          </Route>
          <Route path="/sign-up" Component={Auth} />
          <Route path="/login" Component={Login} />
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
