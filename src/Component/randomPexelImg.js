import React from "react";
import { createClient } from "pexels";
import { useState, useEffect } from "react";
import Loader from "../../Component/Loader";

function randomPexelImg() {
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

  return <div>randomPexelImg</div>;
}

export default randomPexelImg;
