import React from "react";
import Card from "../../Component/Card";
import Accordion from "../../Component/Accordion";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <Card
        rounded={10}
        isBanner={true}
        image={
          "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg"
        }
      />
      <Accordion name={"Fiabilite"} rounded={5} width={"70%"}>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipeskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        a;oisjdmaps'okdaw das daw d afgawfdawd awfg awd wagf a dfaw faw faw .
      </Accordion>
      <Accordion name={"Respect"} rounded={5} width={"70%"}>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Accordion>
    </div>
  );
}
