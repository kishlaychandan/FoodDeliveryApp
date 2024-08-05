// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CartProvider } from "./CartContext"; // Ensure CartProvider is imported
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from './components/Cart/Cart';
import OrderSummary from "./components/OrderSummary/OrderSummary";
import OrderStatus from "./components/OrderStatus/OrderStatus";
import Contact from "./Contact/Contact";
import Menu from "./components/Menu/Menu";
import data from "./components/data";
import ProtectedRoute from "./protectedRoute";
import AuthContext from "./AuthContext";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import TiffinService from "./components/TiffinService/TiffinService";
import TiffinServiceSummaryAndPayment from "./components/TiffinServiceSummaryAndPayment/TiffinServiceSummaryAndPayment";

function App() {
  const navigate = useNavigate(); // This should be inside the functional component

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified === false) {
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

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return sendEmailVerification(userCredential.user);
      })
      .then(() => {
        alert("Verification link is sent to your email. Please check your email");
        navigate("/signin");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function logout() {
    auth.signOut();
    navigate("/signin");
  }

  return (
    <CartProvider>
      <AuthContext.Provider value={{ login, signup, logout }}>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/order-summary" element={<ProtectedRoute><OrderSummary /></ProtectedRoute>} />
            <Route path="/orderStatus" element={<ProtectedRoute><OrderStatus /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/menu" element={<ProtectedRoute><Menu data={data} /></ProtectedRoute>} />
            <Route path="/tiffin" element={<ProtectedRoute><TiffinService/></ProtectedRoute>} />
            <Route path="/tiffin-summary-payment" element={<ProtectedRoute><TiffinServiceSummaryAndPayment /></ProtectedRoute>} />
      
            
          </Routes>
      </AuthContext.Provider>
    </CartProvider>
  );
}

export default App;
