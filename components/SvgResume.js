import React, { useEffect, useState } from "react";
import Slider from './Slider';
import resume from '../resume.json';
export default function SvgResume() {

  // Document Dimensions
  const ORIGINAL_WIDTH=8.5
  const ORIGINAL_HEIGHT=11
  const ORIGINAL_VIEWBOX_WIDTH=215.9
  const ORIGINAL_VIEWBOX_HEIGHT=279.4
  const [width, setWidth] = useState(ORIGINAL_WIDTH)
  const [height, setHeight] = useState(ORIGINAL_HEIGHT)

  // Document
  const STARTX = 10;
  const STARTY = 10;

  const positionSvg = {
    textAlign: "center",
    marginTop: "25px",
  };

  const positionSvgTools = {
    textAlign: "center"
  };

  function adjustCoefficient(coefficient) {
    setWidth(ORIGINAL_WIDTH * coefficient)
    setHeight(ORIGINAL_HEIGHT * coefficient)
  }

  function getTextWidth(text, font = "500 12px sans-serif") {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
  }

  function breakString(word, maxWidth, hyphenCharacter='-') {
    const characters = word.split("");
    const lines = [];
    let currentLine = "";  characters.forEach((character, index) => {
      const nextLine = `${currentLine}${character}`;
      const lineWidth = getTextWidth(nextLine);    if (lineWidth >= maxWidth) {
        const currentCharacter = index + 1;
        const isLastLine = characters.length === currentCharacter;
        const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
        lines.push(isLastLine ? nextLine : hyphenatedNextLine);
        currentLine = "";
      } else {
        currentLine = nextLine;
      }
    });  return { hyphenatedStrings: lines, remainingWord: currentLine };
  }

  function wrapLabel(label, maxWidth) {
    const words = label.split(" ");
    const completedLines = [];
    let nextLine = "";  words.forEach((word, index) => {
      const wordLength = getTextWidth(`${word} `);
      const nextLineLength = getTextWidth(nextLine);    if (wordLength > maxWidth) {
        const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth);
        completedLines.push(nextLine, ...hyphenatedStrings);      nextLine = remainingWord;
      } else if (nextLineLength + wordLength >= maxWidth) {
        completedLines.push(nextLine);
        nextLine = word;
      } else {
        nextLine = [nextLine, word].filter(Boolean).join(" ");
      }
      const currentWord = index + 1;
      const isLastWord = currentWord === words.length;    if (isLastWord) {
        completedLines.push(nextLine);
      }
    });  return completedLines.filter(line => line !== "");
  }

  useEffect(() => {

    console.info("useEffect");
    const nameSize = 6;
    const addressSize = 4;
    const headingSize = 5.5;
    const addressLineSpacing = 3;
    var svg = document.getElementById("resume");

    var canvasRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    canvasRect.style.fill = "white";
    canvasRect.setAttribute("width","100%");
    canvasRect.setAttribute("height","100%");
    svg.appendChild(canvasRect);

    var firstName = document.createElementNS("http://www.w3.org/2000/svg","text");
    firstName.setAttribute("x",STARTX);
    firstName.setAttribute("y",STARTY);
    firstName.setAttribute("font-size", nameSize);
    firstName.setAttribute("font-family", "sans-serif");
    firstName.setAttribute("dominant-baseline", "hanging");
    firstName.innerHTML = resume.first_name.toUpperCase();
    svg.appendChild(firstName);
    var firstNameBBox = firstName.getBBox({ fill: false });

    var lastName = document.createElementNS("http://www.w3.org/2000/svg","text");
    lastName.setAttribute("x", firstNameBBox.x + firstNameBBox.width);
    lastName.setAttribute("y",STARTY);
    lastName.setAttribute("font-size", nameSize);
    lastName.setAttribute("font-family", "sans-serif");
    lastName.setAttribute("dominant-baseline", "hanging");
    lastName.innerHTML = resume.last_name.toUpperCase();
    svg.appendChild(lastName);
    const lastNameBBox = lastName.getBBox();

    const lineXPosition = lastNameBBox.x + lastNameBBox.width + 5;
    var verticalLine = document.createElementNS("http://www.w3.org/2000/svg","line");
    const x = 20;
    verticalLine.setAttribute("x1",lineXPosition);
    verticalLine.setAttribute("y1",STARTY + 4);
    verticalLine.setAttribute("x2",lineXPosition);
    verticalLine.setAttribute("y2","150");
    verticalLine.setAttribute("stroke", "black");
    verticalLine.setAttribute("stroke-width", ".25px");
    svg.appendChild(verticalLine);

    var addressLine = document.createElementNS("http://www.w3.org/2000/svg","text");
    addressLine.setAttribute("x", firstNameBBox.x);
    addressLine.setAttribute("y", STARTY + firstNameBBox.height);
    addressLine.setAttribute("font-size", addressSize);
    addressLine.setAttribute("font-family", "sans-serif");
    addressLine.setAttribute("dominant-baseline", "hanging");
    addressLine.innerHTML =  resume.city_state
    svg.appendChild(addressLine);
    const addressLineBBox = addressLine.getBBox();

    var redCirle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    redCirle.style.fill = "red";
    redCirle.setAttribute("cx",lineXPosition);
    redCirle.setAttribute("cy",lineXPosition);
    redCirle.setAttribute("r","1");
    svg.appendChild(redCirle);

    var lineUnderName = document.createElementNS("http://www.w3.org/2000/svg","line");
    const nameLineYPosition = addressLineBBox.y;
    lineUnderName.setAttribute("x1",STARTX + 20);
    lineUnderName.setAttribute("y1",nameLineYPosition + addressSize + addressLineSpacing);
    lineUnderName.setAttribute("x2",lineXPosition);
    lineUnderName.setAttribute("y2",nameLineYPosition + addressSize + addressLineSpacing);
    lineUnderName.setAttribute("stroke", "black");
    lineUnderName.setAttribute("stroke-width", ".25px");
    svg.appendChild(lineUnderName);
    const lineUnderNameBox = lineUnderName.getBBox();

    var emailLine = document.createElementNS("http://www.w3.org/2000/svg","text");
    emailLine.setAttribute("x", firstNameBBox.x);
    emailLine.setAttribute("y", lineUnderNameBox.y + addressLineSpacing );
    emailLine.setAttribute("font-size", addressSize);
    emailLine.setAttribute("font-family", "sans-serif");
    emailLine.setAttribute("dominant-baseline", "hanging");
    emailLine.innerHTML = resume.email
    svg.appendChild(emailLine);
    const emailLineBBox = emailLine.getBBox();

    var phoneLine = document.createElementNS("http://www.w3.org/2000/svg","text");
    phoneLine.setAttribute("x", emailLineBBox.x);
    phoneLine.setAttribute("y", emailLineBBox.y + addressLineSpacing + 2);
    phoneLine.setAttribute("font-size", addressSize);
    phoneLine.setAttribute("font-family", "sans-serif");
    phoneLine.setAttribute("dominant-baseline", "hanging");
    phoneLine.innerHTML = resume.phone_number
    svg.appendChild(phoneLine);

    var experienceHeading = document.createElementNS("http://www.w3.org/2000/svg","text");
    experienceHeading.setAttribute("x",lineXPosition + 5);
    experienceHeading.setAttribute("y", STARTY + 8);
    experienceHeading.setAttribute("font-size", headingSize);
    experienceHeading.setAttribute("font-family", "sans-serif");
    experienceHeading.setAttribute("font-weight", "lighter");

    experienceHeading.setAttribute("dominant-baseline", "hanging");
    experienceHeading.innerHTML = "Experience"
    svg.appendChild(experienceHeading);

    // const label = wrapLabel("supercalifragilisticexpialidocious", 50);
    // console.info(label)
    // var lines = []
    // for(var i = 0; i < label.length; i++){
    //   console.log((i+1) + " --> " + label[i])
    //   var line = document.createElementNS("http://www.w3.org/2000/svg","text");
    // }

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
      <Slider adjustCoefficient={adjustCoefficient}/>
      <div id='svgContainer' style={positionSvg}>
        <svg id="resume"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${ORIGINAL_VIEWBOX_WIDTH} ${ORIGINAL_VIEWBOX_HEIGHT}`}
          height={`${height}in`}
          width={`${width}in`}/>
      </div>
      <div style={positionSvgTools} onClick={() => { downloadSvg();}}>[Download]</div>
      <div style={positionSvgTools} onClick={() => { printView();}}>[Printable]</div>
    </>
  );
}
