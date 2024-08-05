import React, { useContext } from "react";
import style from "./Signup.module.css";
import { useState } from "react";
import AuthContext from '../../AuthContext';
import { Link } from "react-router-dom";
function Signup() {
  // sing up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);
  function create(e) {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <>
      <div className={style.nav}>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
      </div>
      <form onSubmit={create}>
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default Signup;
