import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <NavLink to={"/"} activeClassName="activeLink" tabIndex={0}>
        <div className="footer-logo">
          K
          <div className="logo" tabIndex={0}>
            <img
              src={process.env.PUBLIC_URL + "/kasa_logo_white.svg"}
              className="logo-img"
              alt="Logo Kasa"
              width={30}
              draggable={false}
            />
          </div>
          sa
        </div>
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
