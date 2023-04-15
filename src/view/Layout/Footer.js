import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        K
        <div className="logo" tabIndex={0}>
          <img
            src={process.env.PUBLIC_URL + "/kasa_logo_white.svg"}
            className="logo-img"
            alt="Logo Kasa"
            width={30}
          />
        </div>
        sa
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
