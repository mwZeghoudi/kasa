import React from "react";
import "./NotFoundPage.css";
function NotFoundPage() {
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
      <a href="">Retourner sur la page d’accueil</a>
    </div>
  );
}

export default NotFoundPage;
