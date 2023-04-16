import React from "react";
import "./NavBar.css";
import NavBarLinks from "../../Component/NavBarLinks";
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
      <NavBarLinks />
    </nav>
  );
}
