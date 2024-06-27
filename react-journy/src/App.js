import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth";
import Home from "./components/pages/Home";
import { Login } from "./components/Login";
import Dashboard from "./components/pages/DashBoard";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import { AuthProvider } from "./components/context/AuthContext";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/pages/Profile";
import AddTrips from "./components/pages/AddTrips";
import TripItinerary from "./components/pages/TripItinerary";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/trip" exact element={<TripItinerary />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
