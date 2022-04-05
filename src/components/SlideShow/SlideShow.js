import React from "react";
import "./Slide.css";
import { slideDB } from "./SlideObj";

export const SlideShow = () => {
  return (
    <div>
      <div className="slideshow-container">
        {slideDB.map((slide, idx) => (
          <div key={idx} className="">
            <div className="">{slide.imgNum}</div>
            <img src={slide.imgUrl} alt={slide.imgAlt} />
            <div className="">{slide.imgDesc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// let slideNumber = 1;
// showSlides(slideNumber);

// function showSlides(number) {
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");

//   if (number > slides.length) {
//     slideNumber = 1;
//   }
//   if (number < 1) {
//     slideNumber = slides.length;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[slideNumber - 1].style.display = "block";
//   dots[slideNumber - 1].className += " active";
// }
