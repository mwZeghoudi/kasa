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
    let contentSpan;
    let contentTXT = props.content;
    if (props.content) {
      if (window.innerWidth <= 600) {
        const newTXT = contentTXT.split(",");
        contentSpan = (
          <span className="content">
            {newTXT[0]}
            <br />
            {newTXT[1]}
          </span>
        );
      } else {
        contentSpan = <span className="content">{contentTXT}</span>;
      }
    }

    content = (
      <div className="card banner-card" style={cardStyle}>
        <span className="gradient grey-filter" style={filterStyle}></span>
        {contentSpan}
      </div>
    );
  }

  return <>{content}</>;
}
