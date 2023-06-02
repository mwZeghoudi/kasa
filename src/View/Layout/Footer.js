import React, { useState, useEffect } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState("© 2020 Kasa. All rights reserved");
  
  useEffect(() => {
    if (window.innerWidth <= 600) {
      const newText = text.split(".");
      setText(
        <>
          {newText[0] + "."}
          <br />
          {newText[1]}
        </>
      );
    } else {
      setText("© 2020 Kasa. All rights reserved");
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

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
      <p>{text}</p>
    </footer>
  );
}
