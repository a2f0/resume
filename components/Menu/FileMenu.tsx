import {useMenu} from './MenuContext';

const FileMenu = () => {
  const context = useMenu();

  const downloadPDF = () => {
    console.info('download PDF');
    context.setIsActive(false);
  };

  const downloadSVG = () => {
    console.info('download SVG');
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
