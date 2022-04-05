import React from "react";
import "./Slide.css";
import { imageInfo, dotInfo } from "./SlideObj";

export const SlideShow = () => {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
  }

  return (
    <div>
      <div className="slideshow-container">
        {imageInfo.map(img => (
          <div key={img.key} className="mySlides fade">
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
