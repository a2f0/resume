import React, {CSSProperties, useEffect, useState} from 'react';
import {
  selectBackgroundColor,
  selectForegroundColor,
  selectHighlightColor,
} from '../lib/resumeConfigSlice';
import Color from 'color';
import {ResumeConfig} from '../lib/resumeConfig';
import CanvasResumeFactory from '../lib/canvasResumeFactory';
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
  const positionContainer: CSSProperties = {
    textAlign: 'center',
    marginTop: '25px',
  };

  const scale = useAppSelector(selectScale);
  const [width] = useState(documentWidth);
  const [height] = useState(documentHeight);

  useEffect(() => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
      highlightColor: Color(highlightColor),
    };
    const resumeFactory = new CanvasResumeFactory(config, width, height, scale);
    const resume = resumeFactory.getResume();
    const svgContainer = document.getElementById('canvasContainer');
    if (svgContainer) {
      svgContainer.innerHTML = '';
      svgContainer.appendChild(resume);
    }
  });

  return (
    <SvgContainer
      className="svg"
      id="canvasContainer"
      style={positionContainer}
    ></SvgContainer>
  );
}
