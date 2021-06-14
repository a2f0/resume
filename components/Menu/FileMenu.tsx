import React, {useEffect} from 'react';
import {
  selectBackgroundColor,
  selectForegroundColor,
} from '../../library/resumeConfigSlice';
import CheckMark from './CheckMark';
import Color from 'color';
import MenuLink from './MenuLink';
import MenuListItem from './MenuListItem';
import PdfResumeFactory from '../../library/pdfResumeFactory';
import {ResumeConfig} from '../../library/resumeConfig';
import SvgResumeFactory from '../../library/svgResumeFactory';
import {useAppSelector} from '../../library/hooks';
import {useDropdownMenu} from './DropdownMenuContext';
import {useMenuParent} from './MenuParentContext';

const FileMenu = () => {
  const context = useDropdownMenu();
  const parentContext = useMenuParent();
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  useEffect(() => {});

  const downloadPDF = () => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
    };
    const resumeFactory = new PdfResumeFactory(config);
    const resume = resumeFactory.getResume();
    const blob = new Blob([resume.output()], {
      type: 'application/pdf',
    });
    const element = document.createElement('a');
    element.download = 'dan.sullivan.resume.pdf';
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
    context.setIsActive(false);
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  // const printableSVG = () => {
  //   const svg = document.getElementById('svgContainer');
  //   if (svg && svg.innerHTML) {
  //     const printableView = window.open('', '_blank');
  //     if (printableView) {
  //       printableView.document.write(svg.innerHTML);
  //     }
  //   }
  // };

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
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  return (
    <ul>
      {/* <li>
        <a onClick={printableSVG}>Printable SVG</a>
      </li> */}
      <MenuListItem>
        <div id="downloadPdfMenuOption" onClick={downloadPDF}>
          <CheckMark isActive={false} />
          <MenuLink>Download PDF</MenuLink>
        </div>
      </MenuListItem>
      <MenuListItem>
        <div id="downloadSvgMenuOption" onClick={downloadSVG}>
          <CheckMark isActive={false} />
          <MenuLink>Download SVG</MenuLink>
        </div>
      </MenuListItem>
    </ul>
  );
};
export default FileMenu;
