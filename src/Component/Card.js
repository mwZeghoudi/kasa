import React from "react";
import "./Card.css";

export default function Card(props) {
  let gradient;
  const content = <span className="content">{props.content}</span>;
  const gradientStyle = { borderRadius: `${props.rounded}px` };
  const figureStyle = {
    borderRadius: `${props.rounded}px`,
  };

  if (props.isGrey) {
    figureStyle.background = "#F7F7F7";
    figureStyle.color = "#FF6060";
  } else {
    figureStyle.background = "#FF6060";
    figureStyle.color = "#FFF";
  }

  if (props.gradient) {
    gradient = <span className="gradient" style={gradientStyle}></span>;
  }

  if (props.isLocation) {
    figureStyle.padding = "20px";
  }

  return (
    <article className="card" style={figureStyle}>
      {gradient}
      {content}
    </article>
  );
}
