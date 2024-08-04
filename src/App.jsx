import { useState } from "react";
import "./App.css";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from './components/Cart/Cart'
import { auth } from "./firebaseConfig";
import AuthContext from "./AuthContext";
import ProtectedRoute from "./protectedRoute"
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import OrderStatus from "./components/OrderStatus/OrderStatus";
import Contact from "./Contact/Contact";
import Menu from "./components/Menu/Menu";
function App() {
  const navigate = useNavigate();
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified == false) {
          alert("Hello Dear, Please verify your email");
          navigate("/home");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const singnup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return sendEmailVerification(userCredential.user);
      })
      .then(() => {
        alert(
          "Verification link is sent to your email. Please check your email"
        );
        navigate("/signin");
      })
      .catch((error) => {
        alert(error.message);
        // ..
      });
  };
  function logout(){
    auth.signOut();
    navigate("/signin")
  }
  return (
    <div>
          <AuthContext.Provider value={{ login, singnup,logout }}>
      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/orderStatus" element={<ProtectedRoute><OrderStatus/></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>} />
            <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
            
            {/* <Route path="/" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
            <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
            <Route path="/signin" element={<ProtectedRoute><SignIn /></ProtectedRoute>} /> */}
        </Routes>
          </AuthContext.Provider>
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
