import React from "react";
import { useState } from "react";
import "./Accordion.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Accordion(props) {
  library.add(faChevronUp);
  const [isActive, setIsActive] = useState(false);
  if (isActive) {
  }
  return (
    <>
      <button className="accordion-btn">
        {props.children}
        <FontAwesomeIcon icon="chevron-up" flip="vertical" spin />
      </button>
      
    </>
  );
}
