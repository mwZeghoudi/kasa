import React from "react";
import { useState, useEffect } from "react";
import Card from "../../Component/Card";
import Loader from "../../Component/Loader";
import "./Home.css";
import { createClient } from "pexels";
import { Link } from "react-router-dom";
import logementArray from "../../logement-data.json";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
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
        setIsLoaded(true);
      });
  }, []);
  return (
    <div className="home-container">
      {isLoaded ? (
        <>
          <Card
            rounded={10}
            content={"Chez vous, partout et ailleurs"}
            isBanner={true}
            image={landScapePicture}
          />
          <Card rounded={25} isGrey={true}>
            {logementArray.map((e) => (
              <Link to={"/housing/" + e.id}>
                <Card
                  key={e.id}
                  rounded={10}
                  gradient={true}
                  content={e.title}
                  isLocation={true}
                  image={e.cover}
                />
              </Link>
            ))}
          </Card>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}
