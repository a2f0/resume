import React, { useEffect, } from "react";

export default function SvgResume() {

  const positionSvg = {
    textAlign: "center",
    marginTop: "100px",
  };

  const positionSvgTools = {
    textAlign: "center"
  };

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

    var firstName = document.createElementNS("http://www.w3.org/2000/svg","text");
    firstName.setAttribute("x",10);
    firstName.setAttribute("y",20);
    firstName.setAttribute("font-size", "9");
    firstName.setAttribute("font-family", "sans-serif");
    firstName.innerHTML = "DAN"
    svg.appendChild(firstName);
  });

  const downloadSvg = () => {
    const svg = document.getElementById('svgContainer').innerHTML;
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "dan.sullivan.resume.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
  }

  const printView = () => {
    const svg = document.getElementById('svgContainer').innerHTML;
    const printableView = window.open(
      "", "_blank"
    );
    printableView.document.write(svg)
  }

  return (
    <>
      <div id='svgContainer' style={positionSvg}>
        <svg id="resume"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 215.9 279.4"
          height="11in"
          width="8.5in"/>
      </div>
      <div style={positionSvgTools} onClick={() => { downloadSvg();}}>[Download]</div>
      <div style={positionSvgTools} onClick={() => { printView();}}>[Printable]</div>
    </>
  );
}
