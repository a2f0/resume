import React, {useEffect} from 'react';
import {
  selectBackgroundColor,
  selectForegroundColor,
  selectHighlightColor,
} from '../../library/resumeConfigSlice';
import CheckMark from './CheckMark';
import Color from 'color';
import MenuLink from './MenuLink';
import MenuListItem from './MenuListItem';
import PdfResumeFactory from '../../library/pdfResumeFactory';
import {ResumeConfig} from '../../library/resumeConfig';
import SvgResumeFactory from '../../library/svgResumeFactory';
import {selectScale} from '../../library/resumeConfigSlice';
import {useAppSelector} from '../../library/hooks';
import {useDropdownMenu} from './DropdownMenuContext';
import {useMenuParent} from './MenuParentContext';

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
    const resumeFactory = new PdfResumeFactory(config);
    const resume = resumeFactory.getResume();
    resume.save('dan.sullivan.resume.pdf');
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  const downloadSVG = () => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
      highlightColor: Color(highlightColor),
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
        <CheckMark isActive={false} />
        <MenuLink>Download PDF</MenuLink>
      </MenuListItem>
      <MenuListItem
        id="downloadSvgMenuOption"
        onClick={downloadSVG}
        scale={scale}
      >
        <CheckMark isActive={false} />
        <MenuLink>Download SVG</MenuLink>
      </MenuListItem>
    </ul>
  );
};
export default FileMenu;
