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
  const contentRefs = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isAlreadyLoaded, setIsAlreadyLoaded] = useState(false);
  const [picturesElement, setPicturesElement] = useState(null);
  const [isCarousselDisabled, setIsCarousselDisabled] = useState(false);
  const [pictureWidth, setPictureWidth] = useState(0);

  useEffect(() => {
    setPicturesElement(
      <>
        {pictures.map((e, i) => (
          <img
            key={i}
            className={"carrousel-picture"}
            data-index={i + 1}
            src={e}
            alt={props.name + "-" + (i + 1)}
            draggable={false}
          />
        ))}
      </>
    );
    setPictureWidth(contentRefs.current.offsetWidth);
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setPictureWidth(contentRefs.current.offsetWidth);
    Array.from(contentRefs.current.children).forEach((e, i) => {
      e.style.left = `${
        contentRefs.current.offsetWidth * i - contentRefs.current.offsetWidth
      }px`;
    });
  };

  useEffect(() => {
    if (dataLoaded && isAlreadyLoaded === false) {
      const clonedElement = contentRefs.current.lastChild.cloneNode(true);
      contentRefs.current.insertBefore(
        clonedElement,
        contentRefs.current.firstChild
      );
      Array.from(contentRefs.current.children).forEach((e, i) => {
        e.style.left = `${pictureWidth * i - pictureWidth}px`;
      });
      setIsAlreadyLoaded(true);
    }
  }, [dataLoaded]);
  const removeTransition = () => {
    Array.from(contentRefs.current.children).forEach((e) => {
      e.style.transition = null;
    });
  };

  const scrollPicture = (isNext) => {
    if (isNext) {
      contentRefs.current.removeChild(contentRefs.current.firstChild);
      const clonedElement = contentRefs.current.firstChild.cloneNode(true);
      contentRefs.current.insertBefore(
        clonedElement,
        contentRefs.current.lastChild.nextSibling
      );
      Array.from(contentRefs.current.children).forEach((e, i) => {
        e.style.transition = "left 0.5s ease-in-out";
        e.style.left = `${pictureWidth * i - pictureWidth}px`;
      });
    } else {
      Array.from(contentRefs.current.children).forEach((e) => {
        e.style.transition = "left 0.5s ease-in-out";
        e.style.left = parseInt(e.style.left) + pictureWidth + "px";
      });
      contentRefs.current.removeChild(contentRefs.current.lastChild);
      const clonedElement = contentRefs.current.lastChild.cloneNode(true);
      clonedElement.style.left = `${-pictureWidth}px`;
      contentRefs.current.insertBefore(
        clonedElement,
        contentRefs.current.firstChild
      );
    }
    setActiveIndex(contentRefs.current.children[1].dataset.index);

    return new Promise(function (resolve) {
      setTimeout(resolve, 600);
    });
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 ? (
        <div className="carrousel-overlay">
          <button
            id="carrousel-chevron-left"
            name="carrousel-left"
            disabled={isCarousselDisabled}
            tabIndex={0}
            onClick={function () {
              setIsCarousselDisabled(true);
              scrollPicture(false).then((value) => {
                removeTransition();
                setIsCarousselDisabled(false);
              });
            }}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </button>
          <span className="carrousel-count">
            {activeIndex}/{pictures.length}
          </span>
          <button
            id="carrousel-chevron-right"
            name="carrousel-right"
            disabled={isCarousselDisabled}
            tabIndex={0}
            onClick={function () {
              setIsCarousselDisabled(true);
              scrollPicture(true).then((value) => {
                removeTransition();
                setIsCarousselDisabled(false);
              });
            }}
          >
            <FontAwesomeIcon icon="chevron-right" />
          </button>
        </div>
      ) : (
        <></>
      )}
      <div id="carrousel-image" ref={contentRefs}>
        {picturesElement}
      </div>
    </div>
  );
}
