import React from "react";
import "./Card.css";

export default function Card(props) {
  let gradient;
  let content;
  const filterStyle = { borderRadius: `${props.rounded}px` };
  const cardStyle = {
    borderRadius: `${props.rounded}px`,
  };

  if (props.isGrey) {
    cardStyle.background = "#F7F7F7";
    cardStyle.width = "calc(100vw * 0.85)";
    cardStyle.gap = "25px";
    content = (
      <div className="card" style={cardStyle}>
        {props.children}
      </div>
    );
  } else {
    cardStyle.background = "#FF6060";
    cardStyle.color = "#FFF";
  }

  if (props.gradient) {
    gradient = <span className="gradient" style={filterStyle}></span>;
  }
  if (props.image) {
    cardStyle.background = `url(${props.image}) no-repeat center center/cover`;
  }

  if (props.isLocation) {
    cardStyle.padding = "20px";
    cardStyle.width = "calc(((100vw * 0.85) / 3) - 50px)";
    cardStyle.height = "calc(((100vw * 0.85) / 3) - 50px)";
    cardStyle.flexDirection = "column";
    cardStyle.justifyContent = "flex-end";
    content = (
      <article className="card" style={cardStyle}>
        {gradient}
        <span className="content">{props.content}</span>
      </article>
    );
  }
  if (props.isBanner) {
    cardStyle.width = "calc(100vw * 0.85)";
    cardStyle.justifyContent = "center";
    cardStyle.padding = "calc(100vw * 0.03)";
    content = (
      <div className="card" style={cardStyle}>
        <span className="grey-filter" style={filterStyle}></span>
        <span className="content" style={{ fontSize: "calc(100vw / 45) " }}>
          {props.content}
        </span>
      </div>
    );
  }

  return <>{content}</>;
}
