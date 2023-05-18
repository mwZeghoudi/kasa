import React from "react";

import { useState, useEffect } from "react";
import Card from "../../Component/Card";
import Accordion from "../../Component/Accordion";
import "./About.css";
import { createClient } from "pexels";

export default function About() {
  const [landScapePicture, setLandScapePicture] = useState(
    "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg"
  );

  useEffect(() => {
    const client = createClient(
      "IUYd1xTYs3jOIKIQMrVB5nQrBu6uZ2puDY8kZnqqCD6PClurqoReoeva"
    );
    const query = "Landscape";
    const perPage = 80; // number of photos to retrieve per page
    const randomPage = Math.floor(Math.random() * 10) + 1; // get a random page between 1 and 10

    client.photos
      .search({
        query,
        per_page: perPage,
        page: randomPage,
        orientation: "landscpae",
      })
      .then((photos) => {
        const randomIndex = Math.floor(Math.random() * perPage); // get a random index within the retrieved photos
        const randomPhoto = photos.photos[randomIndex].src.landscape; // get the random photo
        setLandScapePicture(randomPhoto);
      });
  }, []);

  return (
    <div className="about-container">
      <Card rounded={10} isBanner={true} image={landScapePicture} />
      <Accordion
        name={"Fiabilite"}
        list={["Bouilloire", "Wi-fi", "Micro-Ondes"]}
        rounded={5}
      >
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Accordion>
      <Accordion name={"Respect"} rounded={5}>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Accordion>
      <Accordion name={"Service"} rounded={5}>
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </Accordion>
      <Accordion name={"Sécurité"} rounded={5}>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </Accordion>
    </div>
  );
}
