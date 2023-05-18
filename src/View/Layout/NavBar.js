import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="nav-bar">
      <Link to={"/"} href="" tabIndex={0}>
        <div className="nav-logo">
          K
          <div className="logo" tabIndex={0}>
            <img
              src={process.env.PUBLIC_URL + "/kasa_logo.svg"}
              className="logo-img"
              alt="Logo Kasa"
              width={30}
            />
          </div>
          sa
        </div>
      </Link>
      <ul>
        <li>
          <Link to={"/"} href="" tabIndex={0}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to={"/about"} href="" tabIndex={0}>
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
