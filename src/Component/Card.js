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
    content = (
      <section className="card grey-card" style={cardStyle}>
        {props.children}
      </section>
    );
  }

  if (props.gradient) {
    gradient = <span className="gradient" style={filterStyle}></span>;
  }

  if (props.image) {
    cardStyle.background = `url(${props.image}) no-repeat center center/cover`;
  }

  if (props.isLocation) {
    content = (
      <article className="card location-card" style={cardStyle}>
        {gradient}
        <span className="content">{props.content}</span>
      </article>
    );
  }
  if (props.isBanner) {
    if (!props.content) {
      cardStyle.height = "calc(100vw * 0.16)";
    }
    content = (
      <div className="card banner-card" style={cardStyle}>
        <span className="grey-filter" style={filterStyle}></span>
        <span className="content">
          {props.content}
        </span>
      </div>
    );
  }

  return <>{content}</>;
}
