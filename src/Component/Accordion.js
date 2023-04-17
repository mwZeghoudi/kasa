import React from "react";
import { useState, useEffect } from "react";
import "./Accordion.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Accordion(props) {
  library.add(faChevronUp);
  const [isActive, setIsActive] = useState(false);
  // const [contentStyle, setIsContentStyle] = useState({
  //   height: "0",
  //   padding: "0 calc(100vw / 60)",
  // });
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const contentStyle = {
    maxHeight: isActive ? "1000px" : "0",
    transition: "max-height 0.5s ease-in-out",
    overflow: "hidden",
    padding: "0 calc(100vw / 60)",
  };

  return (
    <div
      className={`accordion `}
      style={{ width: props.width, borderRadius: `${props.rounded}px` }}
    >
      <button
        className="accordion-btn"
        style={{ borderRadius: `${props.rounded}px` }}
        onClick={handleClick}
      >
        {props.name}
        <FontAwesomeIcon icon="chevron-up" flip="vertical" spin />
      </button>
      <p className="accordion-content" style={contentStyle}>
        {props.children}
      </p>
    </div>
  );
}
