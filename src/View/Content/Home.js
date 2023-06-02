import React from "react";
import Card from "../../Component/Card";
import "./Home.css";
import { Link } from "react-router-dom";
import logementArray from "../../logement-data.json";

export default function Home() {
  const landScapePicture = `${process.env.PUBLIC_URL}/Homebanner.png`;

  return (
    <div className="home-container">
      <Card
        key={1}
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
    </div>
  );
}
