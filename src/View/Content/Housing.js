import React from "react";
import Carrousel from "../../Component/Carrousel";
import "./Housing.css";
import HousingHeader from "../../Component/HousingHeader";
import HousingInformation from "../../Component/HousingInformation";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Housing(props) {
  const { productId } = useParams();
  const [house, setHouse] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/logement-data.json`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("La réponse du serveur n'est pas OK");
        }
        return response.json();
      })
      .then((data) => {
        const targetObject = data.find((item) => item.id === productId);
        if (targetObject) {
          setHouse(targetObject);
          setIsLoaded(true);
        } else {
          navigate("/not-found");
        }
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
        navigate("/not-found");
      });
  }, []);
  return (
    <>
      {isLoaded ? (
        <div className="housing-container">
          <Carrousel picture={house.pictures} name={house.title} />
          <HousingHeader
            title={house.title}
            location={house.location}
            tags={house.tags}
            host={house.host}
            rating={house.rating}
          />
          <HousingInformation
            description={house.description}
            equipments={house.equipments}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
