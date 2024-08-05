import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <h1>Foodies</h1>
      </div>
      <div
        className={`${style.hamburger} ${isOpen ? style.open : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${style.right} ${isOpen ? style.active : ""}`}>
        <ul>
          
          <li>
            <Link to={"/dashboard"}>FOODS</Link>
          </li>
          <li>
            <Link to="/tiffin" className="tiffin-service-link">
              TIFFIN SERVICE
            </Link>
          </li>
          <li>
            <Link to={"/cart"}>CART</Link>
          </li>
          <li>
            <Link to={"/orderstatus"}>ORDER STATUS</Link>
          </li>
          <li><Link to={"/faq"}>FAQ</Link></li>
          
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
