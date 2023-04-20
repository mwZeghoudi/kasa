import React from "react";
import { useState, useEffect } from "react";
import Card from "../../Component/Card";
import "./Home.css";
import { createClient } from "pexels";

const client = createClient(
  "IUYd1xTYs3jOIKIQMrVB5nQrBu6uZ2puDY8kZnqqCD6PClurqoReoeva"
);

client.photos.curated({ per_page: 1 }).then((photos) => {
  console.log(photos);
});

export default function Home() {
  const [housing, setHousing] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/logement-data.json`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("La réponse du serveur n'est pas OK");
        }
        return response.json();
      })
      .then((data) => {
        setHousing(data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  return (
    <div className="home-container">
      <Card
        rounded={10}
        content={"Chez vous, partout et ailleurs"}
        isBanner={true}
        image={
          "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg"
        }
      />
      <Card rounded={25} isGrey={true}>
        {housing.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            rounded={10}
            gradient={true}
            content={e.title}
            isLocation={true}
            image={e.cover}
            data={e}
          />
        ))}
      </Card>
    </div>
  );
}
