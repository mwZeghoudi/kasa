import React from "react";
import "./NavBar.css";

export default function Navbar(props) {
  return (
    <nav className="nav-bar">
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
      <ul>
        <li>
          <a href="" tabIndex={0}>
            Accueil
          </a>
        </li>
      </ul>
    </nav>
  );
}
