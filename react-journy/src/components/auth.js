import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./auth.css";
import { useAuth } from "./context/AuthContext";
import Navbar from "./Navbar";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signup } = useAuth();

  const signIn = async () => {
    try {
      //await createUserWithEmailAndPassword(auth, email, password);
      await signup(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          setErrorMessage(
            "Please choose a password with more than 6 charaters."
          );
          break;
        case "auth/email-already-in-use":
          setErrorMessage(
            "The email address is already registered. Please use a different email."
          );
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
          <h1>Sign up</h1>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button onClick={signIn}>Sign Up</button>
        </div>
      </div>
    </>
  );
};
