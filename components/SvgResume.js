import React, { useEffect } from 'react'

export default function SvgResume() {

    useEffect(() => {
      console.info("useEffect")
      var svg = document.getElementById("resume");
      
      var redCirle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
      redCirle.style.fill = "red";
      redCirle.setAttribute("cx","50");
      redCirle.setAttribute("cy","50");
      redCirle.setAttribute("r","30");
      svg.appendChild(redCirle);

    });
  
    return (
        <svg id="resume" viewBox="0 0 100 100"/>
    )
  }
  