import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Accordion.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Accordion(props) {
  library.add(faChevronUp);
  const [isActive, setIsActive] = useState(false);
  const [flip, setFlip] = useState("");
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(100);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setContentHeight(contentRef.current.offsetHeight);
  }, [isActive, contentHeight]);

  const handleClick = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setFlip("vertical");
    } else {
      setFlip(false);
    }
  };

  const handleResize = () => {
    setContentHeight(contentRef.current.offsetHeight);
  };

  const contentStyle = {
    height: isActive ? `${contentHeight}px` : "0px",
  };
  return (
    <article
      className={`accordion`}
      style={{ width: props.width, borderRadius: `${props.rounded}px` }}
      key={props.name}
    >
      <button
        className="accordion-btn"
        style={{ borderRadius: `${props.rounded}px` }}
        onClick={handleClick}
      >
        {props.name}
        <FontAwesomeIcon icon="chevron-up" flip={flip} />
      </button>
      <div className="accordion-content" style={contentStyle}>
        <div ref={contentRef}>
          {props.list ? (
            <ul>
              {props.list.map((e, i) => (
                <li>{e}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
          <p>{props.children}</p>
        </div>
      </div>
    </article>
  );
}
