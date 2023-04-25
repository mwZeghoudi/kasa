import React from "react";
import "./Carrousel.css";
import { useState, useEffect, useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Carrousel(props) {
  library.add(faChevronRight, faChevronLeft);
  const pictures = props.picture;
  const contentRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [picturesElement, setPicturesElement] = useState(<></>);

  useEffect(() => {
    setPicturesElement(
      <>
        {pictures.map((e, i) => (
          <img
            key={i}
            className={`carrousel-picture ${i === activeIndex ? "active" : ""}`}
            pictureindex={i + 1}
            src={e}
            ref={(element) => (contentRefs.current[i] = element)}
          />
        ))}
      </>
    );
  }, [activeIndex]);

  const scrollPicture = (isNext) => {
    const activeElement = contentRefs.current.find((element) =>
      element.classList.contains("active")
    );
    console.log(activeElement);
    let activeIndexTMP = activeIndex;
    if (isNext) {
      if (activeIndex >= pictures.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndexTMP + 1);
      }
    } else {
      if (activeIndex <= 0) {
        setActiveIndex(pictures.length - 1);
      } else {
        setActiveIndex(activeIndexTMP - 1);
      }
    }
  };

  return (
    <div className="carrousel">
      <button
        id="carrousel-chevron-left"
        onClick={function () {
          scrollPicture(false);
        }}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <span className="carrousel-count">
        {activeIndex + 1}/{pictures.length}
      </span>
      <button
        id="carrousel-chevron-right"
        onClick={function () {
          scrollPicture(true);
        }}
      >
        <FontAwesomeIcon icon="chevron-right" />
      </button>
      {picturesElement}
    </div>
  );
}
