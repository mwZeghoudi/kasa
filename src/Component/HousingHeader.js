import React from "react";
import "./HousingHeader.css";
import { useState, useEffect, useRef } from "react";

import Tags from "./Tags";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HousingHeader(props) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < 3) {
      stars.push(true);
    } else {
      stars.push(false);
    }
  }
  return (
    <div className="housing-header">
      <div className="heading">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <h2>Paris, Île-de-France</h2>
        <Tags
          content={[
            "TAG 1",
            "TAG 1",
            "TAG 1",
            "TAG 1",
            "TAG 1",
            "TAG 1",
            "TAG 1",
            "TAG 1",
            "TAG 1",
          ]}
        />
      </div>
      <div className="host">
        <div className="host-id">
          <h2>Alexandre Dumas</h2>
          <img src="" alt="" />
        </div>
        <div className="note">
          {stars.map((e) =>
            e ? (
              <FontAwesomeIcon icon={faStar} />
            ) : (
              <FontAwesomeIcon icon={faStar} className="grey" />
            )
          )}
        </div>
      </div>
    </div>
  );
}
