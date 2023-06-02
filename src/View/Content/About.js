import React from "react";
import Card from "../../Component/Card";
import Accordion from "../../Component/Accordion";
import "./About.css";

export default function About() {
  const landScapePicture = `${process.env.PUBLIC_URL}/Aboutbanner.png`;

  return (
    <div className="about-container">
      <Card key={1} rounded={10} isBanner={true} image={landScapePicture} />
      <div className="accordion-container">
        <Accordion key={2} name={"Fiabilite"} rounded={5}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Accordion>
        <Accordion key={3} name={"Respect"} rounded={5}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Accordion>
        <Accordion key={4} name={"Service"} rounded={5}>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Accordion>
        <Accordion key={5} name={"Sécurité"} rounded={5}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Accordion>
      </div>
    </div>
  );
}
