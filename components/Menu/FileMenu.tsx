import React, {useEffect} from 'react';
import {useMenu} from './MenuContext';
import {ResumeConfig} from '../../library/resumeConfig';
import {useAppSelector} from '../../library/hooks';
import {
  selectForegroundColor,
  selectBackgroundColor,
} from '../../library/resumeConfigSlice';
import Color from 'color';
import SvgResumeFactory from '../../library/svgResumeFactory';

const FileMenu = () => {
  const context = useMenu();
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  useEffect(() => {});

  const downloadPDF = () => {
    console.info('download PDF');
    context.setIsActive(false);
  };

  const downloadSVG = () => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
    };
    const resumeFactory = new SvgResumeFactory(config);
    const blob = new Blob([resumeFactory.getResume().outerHTML.toString()], {
      type: 'image/svg+xml',
    });
    const element = document.createElement('a');
    element.download = 'dan.sullivan.resume.svg';
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
    context.setIsActive(false);
  };

  return (
    <ul>
      <li>
        <a onClick={downloadPDF}>Download PDF</a>
      </li>
      <li>
        <a onClick={downloadSVG}>Download SVG</a>
      </li>
    </ul>
  );
};
export default FileMenu;
