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
    const nameSize = 7;
    const startX = 10;
    const startY = 20;
    const lineSpacing = 5;
    var svg = document.getElementById("resume");

    var canvasRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    canvasRect.style.fill = "white";
    canvasRect.setAttribute("width","100%");
    canvasRect.setAttribute("height","100%");
    svg.appendChild(canvasRect);

    var firstName = document.createElementNS("http://www.w3.org/2000/svg","text");
    firstName.setAttribute("x",startX);
    firstName.setAttribute("y",startY);
    firstName.setAttribute("font-size", nameSize);
    firstName.setAttribute("font-family", "sans-serif");
    firstName.innerHTML = "DAN"
    svg.appendChild(firstName);

    var firstNameBBox = firstName.getBBox();
    var lastName = document.createElementNS("http://www.w3.org/2000/svg","text");
    lastName.setAttribute("x", firstNameBBox.x + firstNameBBox.width);
    lastName.setAttribute("y",startY);
    lastName.setAttribute("font-size", nameSize);
    lastName.setAttribute("font-family", "sans-serif");
    lastName.innerHTML = "SULLIVAN"
    svg.appendChild(lastName);

    const lastNameBBox = lastName.getBBox();
    const lineXPosition = lastNameBBox.x + lastNameBBox.width + 5;
    var verticalLine = document.createElementNS("http://www.w3.org/2000/svg","line");
    const x = 20;
    verticalLine.setAttribute("x1",lineXPosition);
    verticalLine.setAttribute("y1",startY - 4);
    verticalLine.setAttribute("x2",lineXPosition);
    verticalLine.setAttribute("y2","150");
    verticalLine.setAttribute("stroke", "black");
    verticalLine.setAttribute("stroke-width", ".25px");
    svg.appendChild(verticalLine);

    var redCirle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    redCirle.style.fill = "red";
    redCirle.setAttribute("cx",lineXPosition);
    redCirle.setAttribute("cy",lineXPosition);
    redCirle.setAttribute("r","1");
    svg.appendChild(redCirle);

    var lineUnderName = document.createElementNS("http://www.w3.org/2000/svg","line");
    const nameLineYPosition = startY + lineSpacing;
    lineUnderName.setAttribute("x1",startX + 8 );
    lineUnderName.setAttribute("y1",nameLineYPosition);
    lineUnderName.setAttribute("x2",lineXPosition);
    lineUnderName.setAttribute("y2",nameLineYPosition);
    lineUnderName.setAttribute("stroke", "black");
    lineUnderName.setAttribute("stroke-width", ".25px");
    svg.appendChild(lineUnderName);
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
