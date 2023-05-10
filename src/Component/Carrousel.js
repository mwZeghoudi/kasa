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
  const [dataLoaded, setDataLoaded] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [picturesElement, setPicturesElement] = useState(null);
  const [isCarousselDisabled, setIsCarousselDisabled] = useState(false);

  useEffect(() => {
    setPicturesElement(
      <>
        {pictures.map((e, i) => (
          <img
            key={i}
            className={`carrousel-picture ${i === activeIndex ? "active" : ""}`}
            data-index={i + 1}
            src={e}
            ref={(element) => (contentRefs.current[i] = element)}
          />
        ))}
      </>
    );
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      const activeElementTMP = contentRefs.current.find((element) =>
        element.classList.contains("active")
      );
      setActiveElement(activeElementTMP);
      const activeElIndex = parseInt(activeElementTMP.dataset.index);
      let nextElement, prevElement;

      if (pictures.length > 1) {
        nextElement = contentRefs.current.find(
          (element) => element.dataset.index == activeElIndex + 1
        );
        prevElement = contentRefs.current.find(
          (element) => element.dataset.index == activeElIndex - 1
        );

        if (activeElIndex >= pictures.length) {
          nextElement = contentRefs.current.find(
            (element) => element.dataset.index == 1
          );
        } else if (activeElIndex <= 1) {
          prevElement = contentRefs.current.find(
            (element) => element.dataset.index == pictures.length
          );
        }
        if (pictures.length > 2) {
          prevElement.classList.add("carrousel-left");
        }
        setActiveIndex(activeElIndex);
      }
    }
  }, [dataLoaded]);

  const scrollPicture = (isNext) => {
    //var part
    const pic = document.getElementById("carrousel-picture");
    setIsCarousselDisabled(true);
    let newAdjacentElement = [];
    const activeElIndex = parseInt(activeElement.dataset.index);
    let nextElement = contentRefs.current.find(
      (element) => element.dataset.index == activeElIndex + 1
    );
    let prevElement = contentRefs.current.find(
      (element) => element.dataset.index == activeElIndex - 1
    );
    if (activeElIndex >= pictures.length) {
      nextElement = contentRefs.current.find(
        (element) => element.dataset.index == 1
      );
    } else if (activeElIndex <= 1) {
      prevElement = contentRefs.current.find(
        (element) => element.dataset.index == pictures.length
      );
    }
    if (pictures.length > 3) {
      if (activeElIndex >= pictures.length) {
        newAdjacentElement[1] = contentRefs.current.find(
          (element) => element.dataset.index == 2
        );
      } else if (activeElIndex >= pictures.length - 1) {
        newAdjacentElement[1] = contentRefs.current.find(
          (element) => element.dataset.index == 1
        );
      } else if (activeElIndex <= 1) {
        newAdjacentElement[0] = contentRefs.current.find(
          (element) => element.dataset.index == pictures.length - 1
        );
      } else if (activeElIndex <= 2) {
        newAdjacentElement[0] = contentRefs.current.find(
          (element) => element.dataset.index == pictures.length
        );
      }
    }

    // Animation part
    activeElement.classList.remove("active");
    if (isNext) {
      nextElement.classList.remove("carrousel-left");
      nextElement.classList.add("active");
      if (!activeElement.classList.contains("carrousel-left")) {
        activeElement.classList.add("carrousel-left");
      }
      setActiveElement(nextElement);
      setActiveIndex(nextElement.dataset.index);

      if (pictures.length === 2) {
      } else if (pictures.length === 3) {
      } else if (pictures.length > 3) {
        if (
          !(activeElIndex >= pictures.length - 1) &&
          !(activeElIndex >= pictures.length)
        ) {
          newAdjacentElement[1] = contentRefs.current.find(
            (element) => element.dataset.index == activeElIndex + 2
          );
        }
        if (newAdjacentElement[1].classList.contains("carrousel-left")) {
          newAdjacentElement[1].classList.remove("carrousel-left");
        }
      }
    } else {
      prevElement.classList.add("active");
      prevElement.classList.remove("carrousel-left");
      if (activeElement.classList.contains("carrousel-left")) {
        activeElement.classList.remove("carrousel-left");
      }
      setActiveElement(prevElement);
      setActiveIndex(prevElement.dataset.index);

      if (pictures.length === 2) {
      } else if (pictures.length === 3) {
      } else if (pictures.length > 3) {
        if (!(activeElIndex <= 1) && !(activeElIndex <= 2)) {
          newAdjacentElement[0] = contentRefs.current.find(
            (element) => element.dataset.index == activeElIndex - 2
          );
        }
        if (!newAdjacentElement[0].classList.contains("carrousel-left")) {
          newAdjacentElement[0].classList.add("carrousel-left");
        }
      }
    }

    if (pictures.length === 2) {
      setTimeout(function () {
        activeElement.classList.toggle("carrousel-left");
      }, 500);
    }

    return new Promise(function (resolve) {
      setTimeout(resolve, 800);
    });
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 ? (
        <div className="carrousel-overlay">
          <button
            id="carrousel-chevron-left"
            disabled={isCarousselDisabled}
            onClick={function () {
              setIsCarousselDisabled(true);
              scrollPicture(false).then((value) => {
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
            disabled={isCarousselDisabled}
            onClick={function () {
              setIsCarousselDisabled(true);
              scrollPicture(true).then((value) => {
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
      <div id="carrousel-image">{picturesElement}</div>
    </div>
  );
}
