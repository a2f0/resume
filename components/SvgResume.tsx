import * as Constants from '../constants';
import React, {CSSProperties, useEffect, useState} from 'react';
import {
  selectBackgroundColor,
  selectForegroundColor,
} from '../library/resumeConfigSlice';
import Color from 'color';
import {ResumeConfig} from '../library/resumeConfig';
import SvgResumeFactory from '../library/svgResumeFactory';
import {useAppSelector} from '../library/hooks';

export default function SvgResume() {
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  // SVG Document Dimensions
  const ORIGINAL_VIEWBOX_WIDTH =
    Constants.DOCUMENT_WIDTH / Constants.PIXELS_PER_POINT;
  const ORIGINAL_VIEWBOX_HEIGHT =
    Constants.DOCUMENT_HEIGHT / Constants.PIXELS_PER_POINT;
  const [width] = useState(Constants.DOCUMENT_WIDTH);
  const [height] = useState(Constants.DOCUMENT_HEIGHT);

  const positionSvg: CSSProperties = {
    textAlign: 'center',
    marginTop: '25px',
  };

  // function adjustCoefficient(coefficient: number) {
  //   setWidth(Constants.DOCUMENT_WIDTH * coefficient);
  //   setHeight(Constants.DOCUMENT_HEIGHT * coefficient);
  // }

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

  return (
    <>
      {/* <Slider adjustCoefficient={adjustCoefficient} /> */}
      <div id="svgContainer" style={positionSvg}></div>
    </>
  );
}
