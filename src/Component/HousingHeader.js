import React from "react";
import "./HousingHeader.css";
import { useState, useEffect, useRef } from "react";

import Tags from "./Tags";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HousingHeader(props) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(props.rating)) {
      stars.push(true);
    } else {
      stars.push(false);
    }
  }
  return (
    <div className="housing-header">
      <div className="heading">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <Tags content={props.tags} />
      </div>
      <div className="host">
        <div className="host-id">
          <h2>{props.host.name}</h2>
          <img src={props.host.picture} alt={props.host.name + "picture"} />
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
