import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  async function signup(email, password) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    try {
      await setDoc(doc(db, "users", email), {
        UID: cred.user.uid
      });
      const authInfo = {
        email: email
      }
      localStorage.setItem("auth", JSON.stringify(authInfo));
      console.log("user document created");
    } catch (error) {
      console.error("Error creating user document: ", error);
      throw error;
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
