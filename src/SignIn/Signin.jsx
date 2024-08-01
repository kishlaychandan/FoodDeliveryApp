import style from "./Signin.module.css";
import React, { useContext, useState } from "react";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  function loggedin(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <>
      <div className={style.nav}>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
      </div>
      <form action="" onSubmit={loggedin}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default Signin;
