import React, {useEffect} from 'react';
import {
  selectBackgroundColor,
  selectForegroundColor,
  selectHighlightColor,
} from '../../lib/resumeConfigSlice';
import CheckMark from './CheckMark';
import Color from 'color';
import MenuLink from './MenuLink';
import MenuListItem from './MenuListItem';
import PdfResumeFactory from '../../lib/pdfResumeFactory';
import {ResumeConfig} from '../../lib/resumeConfig';
import SvgResumeFactory from '../../lib/svgResumeFactory';
import {selectScale} from '../../lib/resumeConfigSlice';
import {useAppSelector} from '../../lib/hooks';
import {useDropdownMenu} from './DropdownMenuContext';
import {useMenuParent} from './MenuParentContext';
import {resume} from '../../lib/resume';

const FileMenu = () => {
  const context = useDropdownMenu();
  const parentContext = useMenuParent();
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  const highlightColor = useAppSelector(selectHighlightColor);
  const scale = useAppSelector(selectScale);
  useEffect(() => {});

  const downloadPDF = () => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
      highlightColor: Color(highlightColor),
    };
    const resumeFactory = new PdfResumeFactory(config, resume);
    const pdfResume = resumeFactory.getResume();
    pdfResume.save('dan.sullivan.resume.pdf');
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  const downloadSVG = () => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
      highlightColor: Color(highlightColor),
    };
    const resumeFactory = new SvgResumeFactory(config, resume);
    const blob = new Blob([resumeFactory.getResume().outerHTML.toString()], {
      type: 'image/svg+xml',
    });
    const element = document.createElement('a');
    element.download = 'dan.sullivan.resume.svg';
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
    context.setIsActive(false);
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  return (
    <ul>
      <MenuListItem
        id="downloadPdfMenuOption"
        onClick={downloadPDF}
        scale={scale}
      >
        <CheckMark $isActive={false} />
        <MenuLink>Download PDF</MenuLink>
      </MenuListItem>
      <MenuListItem
        id="downloadSvgMenuOption"
        onClick={downloadSVG}
        scale={scale}
      >
        <CheckMark $isActive={false} />
        <MenuLink>Download SVG</MenuLink>
      </MenuListItem>
    </ul>
  );
};
export default FileMenu;
