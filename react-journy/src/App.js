import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth";
import Home from "./components/pages/Home";
import { Login } from "./components/Login";
import Dashboard from "./components/pages/DashBoard";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import { AuthProvider } from "./components/context/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" exact element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
