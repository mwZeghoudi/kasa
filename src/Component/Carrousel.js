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

  useEffect(() => {
    console.log(pictureWidth);
    if (dataLoaded) {
      Array.from(contentRefs.current.children).forEach((e, i) => {
        // console.log(e);
        e.style.left = `${(pictureWidth * i) + 1}px`;
      });
    }
  }, [dataLoaded]);

  // const scrollPicture = (isNext) => {
  //   //var part
  //   const pic = document.getElementById("carrousel-picture");
  //   setIsCarousselDisabled(true);
  //   let newAdjacentElement = [];
  //   const activeElIndex = parseInt(activeElement.dataset.index);
  //   let nextElement = contentRefs.current.find(
  //     (element) => element.dataset.index == activeElIndex + 1
  //   );
  //   let prevElement = contentRefs.current.find(
  //     (element) => element.dataset.index == activeElIndex - 1
  //   );
  //   if (activeElIndex >= pictures.length) {
  //     nextElement = contentRefs.current.find(
  //       (element) => element.dataset.index == 1
  //     );
  //   } else if (activeElIndex <= 1) {
  //     prevElement = contentRefs.current.find(
  //       (element) => element.dataset.index == pictures.length
  //     );
  //   }
  //   if (pictures.length > 3) {
  //     if (activeElIndex >= pictures.length) {
  //       newAdjacentElement[1] = contentRefs.current.find(
  //         (element) => element.dataset.index == 2
  //       );
  //     } else if (activeElIndex >= pictures.length - 1) {
  //       newAdjacentElement[1] = contentRefs.current.find(
  //         (element) => element.dataset.index == 1
  //       );
  //     } else if (activeElIndex <= 1) {
  //       newAdjacentElement[0] = contentRefs.current.find(
  //         (element) => element.dataset.index == pictures.length - 1
  //       );
  //     } else if (activeElIndex <= 2) {
  //       newAdjacentElement[0] = contentRefs.current.find(
  //         (element) => element.dataset.index == pictures.length
  //       );
  //     }
  //   }

  //   // Animation part
  //   activeElement.classList.remove("active");
  //   if (isNext) {
  //     nextElement.classList.remove("carrousel-left");
  //     nextElement.classList.add("active");
  //     if (!activeElement.classList.contains("carrousel-left")) {
  //       activeElement.classList.add("carrousel-left");
  //     }
  //     setActiveElement(nextElement);
  //     setActiveIndex(nextElement.dataset.index);

  //     if (pictures.length === 2) {
  //     } else if (pictures.length === 3) {
  //     } else if (pictures.length > 3) {
  //       if (
  //         !(activeElIndex >= pictures.length - 1) &&
  //         !(activeElIndex >= pictures.length)
  //       ) {
  //         newAdjacentElement[1] = contentRefs.current.find(
  //           (element) => element.dataset.index == activeElIndex + 2
  //         );
  //       }
  //       if (newAdjacentElement[1].classList.contains("carrousel-left")) {
  //         newAdjacentElement[1].classList.remove("carrousel-left");
  //       }
  //     }
  //   } else {
  //     prevElement.classList.add("active");
  //     prevElement.classList.remove("carrousel-left");
  //     if (activeElement.classList.contains("carrousel-left")) {
  //       activeElement.classList.remove("carrousel-left");
  //     }
  //     setActiveElement(prevElement);
  //     setActiveIndex(prevElement.dataset.index);

  //     if (pictures.length === 2) {
  //     } else if (pictures.length === 3) {
  //     } else if (pictures.length > 3) {
  //       if (!(activeElIndex <= 1) && !(activeElIndex <= 2)) {
  //         newAdjacentElement[0] = contentRefs.current.find(
  //           (element) => element.dataset.index == activeElIndex - 2
  //         );
  //       }
  //       if (!newAdjacentElement[0].classList.contains("carrousel-left")) {
  //         newAdjacentElement[0].classList.add("carrousel-left");
  //       }
  //     }
  //   }

  //   if (pictures.length === 2) {
  //     setTimeout(function () {
  //       activeElement.classList.toggle("carrousel-left");
  //     }, 500);
  //   }

  //   return new Promise(function (resolve) {
  //     setTimeout(resolve, 800);
  //   });
  // };

  return (
    <div className="carrousel">
      {pictures.length > 1 ? (
        <div className="carrousel-overlay">
          <button
            id="carrousel-chevron-left"
            disabled={isCarousselDisabled}
            // onClick={function () {
            //   setIsCarousselDisabled(true);
            //   scrollPicture(false).then((value) => {
            //     setIsCarousselDisabled(false);
            //   });
            // }}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </button>
          <span className="carrousel-count">
            {activeIndex}/{pictures.length}
          </span>
          <button
            id="carrousel-chevron-right"
            disabled={isCarousselDisabled}
            // onClick={function () {
            //   setIsCarousselDisabled(true);
            //   scrollPicture(true).then((value) => {
            //     setIsCarousselDisabled(false);
            //   });
            // }}
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
