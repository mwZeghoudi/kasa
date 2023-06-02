import React from "react";
import "./HousingInformation.css";
import { useRef } from "react";
import Accordion from "./Accordion";

export default function HousingInformation(props) {
  const contentRef = useRef(null);
  
  const handleResize = () => {
    setTimeout(() => {
      const heights = Array.from(contentRef.current.children).map((e) =>
        parseInt(e.lastChild.style.height)
      );
      const maxHeight = Math.max(...heights);

      Array.from(contentRef.current.children).forEach((e) => {
        if (parseInt(e.lastChild.style.height) > 0) {
          e.lastChild.style.height = maxHeight + "px";
        }
      });
    }, 50);
  };

  return (
    <div className="housing-accordion" ref={contentRef} onClick={handleResize}>
      <Accordion name={"Description"} rounded={5} key="Description">
        {props.description}
      </Accordion>
      <Accordion
        name={"Équipements"}
        rounded={5}
        list={props.equipments}
      ></Accordion>
    </div>
  );
}
