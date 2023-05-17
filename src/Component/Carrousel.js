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
            data-active={i === 0 ? true : false}
            src={e}
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
  };

  const updateClone = () =>{
    if (isAlreadyLoaded === false) {
      Array.from(contentRefs.current.children).forEach((e, i) => {
        e.style.left = `${(pictureWidth * i)}px`;
      });
      const clonedElement = contentRefs.current.lastChild.cloneNode(true);
      contentRefs.current.insertBefore(clonedElement, contentRefs.current.firstChild);
      contentRefs.current.firstChild.style.left = `${-pictureWidth}px`;
      setIsAlreadyLoaded(true)
    }

  }

  useEffect(() => {
    if (dataLoaded && isAlreadyLoaded === false) {
      updateClone()
    }
  }, [dataLoaded]);

  const scrollPicture = (isNext) => {
    const children = Array.from(contentRefs.current.children);
    const oldPicture = children.find(child => child.dataset.active === "true");
    let nextPicture;
    const indexOldPicture = children.indexOf(oldPicture);

    if (isNext) {
      nextPicture = children[indexOldPicture + 1];
    }else{
      nextPicture = children[indexOldPicture - 1];
    }
    oldPicture.dataset.active = 'false';
    nextPicture.dataset.active = 'true';

    console.log(children);
    console.log(oldPicture);
    console.log(nextPicture);
    console.log(indexOldPicture);
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 ? (
        <div className="carrousel-overlay">
          <button
            id="carrousel-chevron-left"
            disabled={isCarousselDisabled}
            onClick={function(){
              scrollPicture(false)
            }}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </button>
          <span className="carrousel-count">
            {activeIndex}/{pictures.length}
          </span>
          <button
            id="carrousel-chevron-right"
            disabled={isCarousselDisabled}
            onClick={function(){
              scrollPicture(true)
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
