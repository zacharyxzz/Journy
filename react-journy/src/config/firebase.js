import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAD9s03QJwZdONjbNMatqxWY4KLMlgG4i0",
  authDomain: "joever-294b0.firebaseapp.com",
  projectId: "joever-294b0",
  storageBucket: "joever-294b0.appspot.com",
  messagingSenderId: "961113304741",
  appId: "1:961113304741:web:9eaf281fb1b19497ece74c",
  measurementId: "G-MEPFLCR7TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);