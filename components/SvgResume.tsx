import React, {useEffect, useState, CSSProperties} from 'react';
import Slider from './Slider';
import * as Constants from '../constants';
import SvgResumeFactory from '../library/svgResumeFactory';
import {
  selectForegroundColor,
  selectBackgroundColor,
} from '../library/resumeConfigSlice';
import {useAppSelector} from '../library/hooks';
import Color from 'color';
import {ResumeConfig} from '../library/resumeConfig';

export default function SvgResume() {
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  // SVG Document Dimensions
  const ORIGINAL_VIEWBOX_WIDTH =
    Constants.DOCUMENT_WIDTH / Constants.PIXELS_PER_POINT;
  const ORIGINAL_VIEWBOX_HEIGHT =
    Constants.DOCUMENT_HEIGHT / Constants.PIXELS_PER_POINT;
  const [width, setWidth] = useState(Constants.DOCUMENT_WIDTH);
  const [height, setHeight] = useState(Constants.DOCUMENT_HEIGHT);

  const positionSvg: CSSProperties = {
    textAlign: 'center',
    marginTop: '25px',
  };

  const positionSvgTools: CSSProperties = {
    textAlign: 'center',
  };

  function adjustCoefficient(coefficient: number) {
    setWidth(Constants.DOCUMENT_WIDTH * coefficient);
    setHeight(Constants.DOCUMENT_HEIGHT * coefficient);
  }

  useEffect(() => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
    };
    const resumeFactory = new SvgResumeFactory(config);
    const resume = resumeFactory.getResume();
    resume.setAttribute('width', width + Constants.UNITS);
    resume.setAttribute('height', height + Constants.UNITS);
    resume.setAttribute(
      'viewBox',
      `0 0 ${ORIGINAL_VIEWBOX_WIDTH} ${ORIGINAL_VIEWBOX_HEIGHT}`
    );
    resume.setAttribute('preserveAspectRatio', 'none');
    const svgContainer = document.getElementById('svgContainer');
    if (svgContainer) {
      svgContainer.innerHTML = '';
      svgContainer.appendChild(resume);
    }
  });

  const downloadSvg = () => {
    const svg = document.getElementById('svgContainer');
    if (svg && svg.innerHTML) {
      const blob = new Blob([svg.toString()]);
      const element = document.createElement('a');
      element.download = 'dan.sullivan.resume.svg';
      element.href = window.URL.createObjectURL(blob);
      element.click();
      element.remove();
    }
  };

  const printView = () => {
    const svg = document.getElementById('svgContainer');
    if (svg && svg.innerHTML) {
      const printableView = window.open('', '_blank');
      if (printableView) {
        printableView.document.write(svg.innerHTML);
      }
    }
  };

  return (
    <>
      <Slider adjustCoefficient={adjustCoefficient} />
      <div id="svgContainer" style={positionSvg}></div>
      <div
        style={positionSvgTools}
        onClick={() => {
          downloadSvg();
        }}
      >
        [Download]
      </div>
      <div
        style={positionSvgTools}
        onClick={() => {
          printView();
        }}
      >
        [Printable]
      </div>
    </>
  );
}
