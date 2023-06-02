import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="nav-bar">
      <NavLink to={"/"} activeClassName="activeLink" tabIndex={0}>
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
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/"} activeClassName="activeLink" tabIndex={0}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} activeClassName="activeLink" tabIndex={0}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
