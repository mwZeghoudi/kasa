import React from "react";
import Tags from "../../Component/Tags";
import Carrousel from "../../Component/Carrousel";
import "./Housing.css";

export default function Housing(props) {
  return (
    <div className="housing-container">
      <Carrousel
        picture={[
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
        ]}
      />
      <Tags content={["Batignolle", "Montmartre"]} />
    </div>
  );
}
