import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [login, setLogin] = useState("Login");
  return (
    <div className="nav_list">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About us</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <li>Cart</li>
        <li
          onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login");
          }}
        >
          {login}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
