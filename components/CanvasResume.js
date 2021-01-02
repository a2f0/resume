import React, { useEffect, } from "react";

export default function SvgResume() {

  useEffect(() => {
    console.info("useEffect");
    var svg = document.getElementById("resume");

    var canvasRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    canvasRect.style.fill = "white";
    canvasRect.setAttribute("width","100%");
    canvasRect.setAttribute("height","100%");
    svg.appendChild(canvasRect);

    var redCirle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    redCirle.style.fill = "red";
    redCirle.setAttribute("cx","20");
    redCirle.setAttribute("cy","20");
    redCirle.setAttribute("r","1");
    svg.appendChild(redCirle);

    var verticalLine = document.createElementNS("http://www.w3.org/2000/svg","line");
    const x = 20;
    verticalLine.setAttribute("x1",x);
    verticalLine.setAttribute("y1","10");
    verticalLine.setAttribute("x2",x);
    verticalLine.setAttribute("y2","150");
    verticalLine.setAttribute("stroke", "black");
    verticalLine.setAttribute("stroke-width", ".25px");
    svg.appendChild(verticalLine);

  });

  return (
    <svg  id="resume"
      viewBox="0 0 215.9 279.4"
      height="11in"
      width="8.5in"/>
  );
}
