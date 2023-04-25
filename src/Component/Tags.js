import React from "react";
import "./Tags.css";

export default function Tags(props) {
  const tags = props.content;

  return (
    <div className="tags">
      {tags.map((e, i) => (
        <div key={i} className="tag">
          {e}
        </div>
      ))}
    </div>
  );
}
