import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Accordion.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Accordion(props) {
  library.add(faChevronUp);
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null); // create a ref for the content element
  const [contentHeight, setContentHeight] = useState(100);

  useEffect(() => {
    window.addEventListener("resize", handleResize); // add the event listener to the window object
    return () => window.removeEventListener("resize", handleResize); // remove the event listener on cleanup
  }, []);

  useEffect(() => {
    setContentHeight(contentRef.current.offsetHeight);
  }, [isActive, contentHeight]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleResize = () => {
    setContentHeight(contentRef.current.offsetHeight); // update the height of the content element on resize
  };

  const contentStyle = {
    height: isActive ? `${contentHeight}px` : "0px",
  };

  return (
    <article
      className={`accordion `}
      style={{ width: props.width, borderRadius: `${props.rounded}px` }}
    >
      <button
        className="accordion-btn"
        style={{ borderRadius: `${props.rounded}px` }}
        onClick={handleClick}
      >
        {props.name}
        <FontAwesomeIcon icon="chevron-up" flip={isActive ? "vertical" : ""} />
      </button>
      <div className="accordion-content" style={contentStyle}>
        <p ref={contentRef}>{props.children}</p>
      </div>
    </article>
  );
}
