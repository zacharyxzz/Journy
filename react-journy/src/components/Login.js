import { useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import { useAuth } from "./context/AuthContext";
import Navbar from "./Navbar";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const signIn = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    try {
      // await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      await login(loginEmail, loginPassword);
      await setLoginMessage("Login success");
      setErrorMessage("");
      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          setErrorMessage("Incorrect email or password");
          break;
        default:
          setErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="box">
          <form onSubmit={signIn}>
            <h1>Login</h1>
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              {loginMessage && <div className="loginMsg">{loginMessage}</div>}
              {errorMessage && <div className="error">{errorMessage}</div>}
              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="log">
                Login
              </button>
              <div className="register">
                <p>
                  Don't have an account? <a href="/sign-up">Register here</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
