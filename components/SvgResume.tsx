import React, { useEffect, useState, CSSProperties } from 'react';
import Slider from './Slider';
import * as Constants from '../constants'
import { svgR } from '../util.js'

export default function SvgResume() {

  // SVG Document Dimensions
  const ORIGINAL_VIEWBOX_WIDTH=Constants.DOCUMENT_WIDTH
  const ORIGINAL_VIEWBOX_HEIGHT=Constants.DOCUMENT_HEIGHT
  const [width, setWidth] = useState(Constants.DOCUMENT_WIDTH)
  const [height, setHeight] = useState(Constants.DOCUMENT_HEIGHT)

  const positionSvg: CSSProperties = {
    textAlign: "center",
    marginTop: "25px",
  };

  const positionSvgTools: CSSProperties = {
    textAlign: "center"
  };

  function adjustCoefficient(coefficient) {
    // setWidth(Constants.DOCUMENT_WIDTH * coefficient)
    // setHeight(Constants.DOCUMENT_HEIGHT * coefficient)
  }

  useEffect(() => {
    var resume = svgR();
    resume.setAttribute('width', width + Constants.UNITS);
    resume.setAttribute('height', height + Constants.UNITS);
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
