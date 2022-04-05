import React from "react";
import "./Slide.css";
import { imageInfo, dotInfo } from "./SlideObj";

export const SlideShow = () => {
  
  return (
    <div>
      <div className="slideshow-container">
        {imageInfo.map(img => (
          <div key={img.key} className=" fade">
            <div className="numbertext">{img.num}</div>
            <img src={img.url} style={{ width: "100%" }} alt={img.alt} />
            <div className="text">{img.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        {dotInfo.map((dot, idx) => (
          <span key={idx} className="dot"></span>
        ))}
      </div>
    </div>
  );
};
