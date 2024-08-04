import style from "./Home.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={style.nav}>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
      </div>
      <h1>Welcome to Home</h1>
    </>
  );
}

export default Home;
