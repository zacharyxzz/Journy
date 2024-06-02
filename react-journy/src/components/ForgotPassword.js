import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Login.css";
import { useAuth } from "./context/AuthContext";

export default function ForgotPassword() {
  const [loginEmail, setLoginEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function reset(event) {
    event.preventDefault();
    try {
      setMessage("");
      setErrorMessage("");
      setLoading(true);
      await resetPassword(loginEmail);
      setMessage("Check your inbox for further instructions.");
    } catch {
      setErrorMessage("Failed to reset password.");
      console.error();
    }
  }
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="box">
          <form onSubmit={reset}>
            <h1>Password Reset</h1>
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              {message && <div className="loginMsg">{message}</div>}
              {errorMessage && <div className="error">{errorMessage}</div>}
              <button type="submit" className="log" disabled={loading}>
                Reset Password
              </button>
              <div className="forgot">
                <a href="/login">Login</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
