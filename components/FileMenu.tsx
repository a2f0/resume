import DropdownMenu from './Menu/DropdownMenu';

const FileMenu = () => {
  return (
    <DropdownMenu label="File">
      <ul>
        <li>
          <a href="#">Download PDF</a>
        </li>
        <li>
          <a href="#">Download SVG</a>
        </li>
      </ul>
    </DropdownMenu>
  );
};

export default FileMenu;
