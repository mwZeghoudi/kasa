import React, { useState, useEffect } from "react";
import "./Card.css";

export default function Card(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState(props.content);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (props.isBanner && props.content) {
      if (window.innerWidth <= 600) {
        const newText = text.split(",");
        setText(
          <>
            {newText[0] + ","}
            <br />
            {newText[1]}
          </>
        );
      } else {
        setText(props.content);
      }
    }
  }, [isMobile]);

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
    content = (
      <div className="card banner-card" style={cardStyle}>
        <span className="gradient grey-filter" style={filterStyle}></span>
        <span className="content">{text}</span>
      </div>
    );
  }

  return <>{content}</>;
}
