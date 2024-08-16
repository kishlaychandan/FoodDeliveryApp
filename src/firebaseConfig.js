import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const API_KEY=import.meta.env.VITE_FIREBASE_API;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "my-app-e9ad2.firebaseapp.com",
  projectId: "my-app-e9ad2",
  storageBucket: "my-app-e9ad2.appspot.com",
  messagingSenderId: "434301018184",
  appId: "1:434301018184:web:888b1c6b0a09c9aabc387d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
