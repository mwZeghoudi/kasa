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
      <Accordion rounded={20}>Fiabilite</Accordion>
    </div>
  );
}
