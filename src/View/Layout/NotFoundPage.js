import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="error-404">
      <h2>
        4
        <div className="logo" tabIndex={0}>
          <img
            src={process.env.PUBLIC_URL + "/kasa_logo.svg"}
            className="logo-img"
            alt="Logo Kasa"
            width={30}
          />
        </div>
        4
      </h2>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to={"/kasa"}>Retourner sur la page d'accueil</Link>
    </div>
  );
}
