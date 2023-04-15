import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        K
        <div className="logo">
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
          <a href="">Accueil</a>
        </li>
      </ul>
    </nav>
  );
}
