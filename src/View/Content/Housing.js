import React from "react";
import Carrousel from "../../Component/Carrousel";
import "./Housing.css";
import HousingHeader from "../../Component/HousingHeader";
import HousingInformation from "../../Component/HousingInformation";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logementArray from "../../logement-data.json";
import Loader from "../../Component/Loader";

export default function Housing(props) {
  const { productId } = useParams();
  const [house, setHouse] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const targetObject = logementArray.find((item) => item.id === productId);
    if (targetObject) {
      setHouse(targetObject);
      setIsLoaded(true);
    } else {
      navigate("/not-found");
    }
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
        <Loader></Loader>
      )}
    </>
  );
}
