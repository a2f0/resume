import * as Constants from '../constants';
import React, {CSSProperties, useEffect, useState} from 'react';
import {
  selectBackgroundColor,
  selectForegroundColor,
  selectHighlightColor,
} from '../lib/resumeConfigSlice';
import Color from 'color';
import {ResumeConfig} from '../lib/resumeConfig';
import SvgResumeFactory from '../lib/svgResumeFactory';
import {resumeConfiguration} from '../configuration';
import {selectScale} from '../lib/resumeConfigSlice';
import styled from 'styled-components';
import {useAppSelector} from '../lib/hooks';

const SvgContainer = styled.div`
  .hoverable:hover {
    fill: #909090;
  }
`;

const {pixelsPerPoint, units, documentWidth, documentHeight} =
  resumeConfiguration;

export default function SvgResume() {
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  const highlightColor = useAppSelector(selectHighlightColor);
  const positionSvg: CSSProperties = {
    textAlign: 'center',
    marginTop: '25px',
  };

  const scale = useAppSelector(selectScale);
  const [width] = useState(Constants.DOCUMENT_WIDTH);
  const [height] = useState(Constants.DOCUMENT_HEIGHT);

  const ORIGINAL_VIEWBOX_WIDTH = documentWidth / pixelsPerPoint;
  const ORIGINAL_VIEWBOX_HEIGHT = documentHeight / pixelsPerPoint;

  useEffect(() => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
      highlightColor: Color(highlightColor),
    };
    const resumeFactory = new SvgResumeFactory(config);
    const resume = resumeFactory.getResume();
    // SVG Document Dimensions (SVG viewport dimensions are in pixels)
    resume.setAttribute('class', 'svg');
    resume.setAttribute('width', width * scale + units);
    resume.setAttribute('height', height * scale + units);
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
    <SvgContainer
      className="svg"
      id="svgContainer"
      style={positionSvg}
    ></SvgContainer>
  );
}
