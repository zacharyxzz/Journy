import React, { useState } from "react";
import { Button } from "../Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { navigate } = useNavigate();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out.");
    }
  }
  return (
    <div>
      <p>Welcome to your Dashboard</p>
      <strong>Email: {currentUser.email} </strong>
      <Button
        className="btns"
        buttonStyles="btn--outline"
        buttonSize="btn--large"
        onClick={handleLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default Dashboard;
