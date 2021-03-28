import React, { useEffect, useState } from "react";
import Slider from './Slider';
import resume from '../resume.json';
import * as Constants from '../constants'
import svgR from '../util.js'

export default function SvgResume() {

  // SVG Document Dimensions
  const ORIGINAL_VIEWBOX_WIDTH=Constants.DOCUMENT_WIDTH
  const ORIGINAL_VIEWBOX_HEIGHT=Constants.DOCUMENT_HEIGHT
  const [width, setWidth] = useState(Constants.DOCUMENT_WIDTH)
  const [height, setHeight] = useState(Constants.DOCUMENT_HEIGHT)

  const positionSvg = {
    textAlign: "center",
    marginTop: "25px",
  };

  const positionSvgTools = {
    textAlign: "center"
  };

  function adjustCoefficient(coefficient) {
    // setWidth(Constants.DOCUMENT_WIDTH * coefficient)
    // setHeight(Constants.DOCUMENT_HEIGHT * coefficient)
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
      const lineWidth = getTextWidth(nextLine);
      if (lineWidth >= maxWidth) {
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
      const isLastWord = currentWord === words.length;
      if (isLastWord) {
        completedLines.push(nextLine);
      }
    });
    return completedLines.filter(line => line !== "");
  }

  useEffect(() => {
    var resume = svgR();
    resume.setAttribute('width', width + Constants.UNITS);
    resume.setAttribute('height',height + Constants.UNITS);
    // resume.setAttribute('viewBox', `0 0 ${width} ${height}`)
    // resume.setAttribute('preserveAspectRatio', "none")
    var svgContainer = document.getElementById("svgContainer");
    svgContainer.innerHTML = '';
    svgContainer.appendChild(resume);
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
      {/* <Slider adjustCoefficient={adjustCoefficient}/> */}
      <div id='svgContainer' style={positionSvg}>
      </div>
      <div style={positionSvgTools} onClick={() => { downloadSvg();}}>[Download]</div>
      <div style={positionSvgTools} onClick={() => { printView();}}>[Printable]</div>
    </>
  );
}
