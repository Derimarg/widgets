import React from "react";
import "./Accordion.css";
import { AccordionSections } from "./AccordionObj";

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function Accordion() {
  return (
    <div>
      {AccordionSections.map((sect, idx) => (
        <>
          <button key={idx} className="accordion">
            {sect.title}
          </button>
          <div className="panel">
            <p>{sect.text}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Accordion;
