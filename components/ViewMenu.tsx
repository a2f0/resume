import DropdownMenu from './Menu/DropdownMenu';

const ViewMenu = () => {
  return (
    <DropdownMenu label="View">
      <ul>
        <li>
          <a href="#">Black Background</a>
        </li>
        <li>
          <a href="#">White Background</a>
        </li>
      </ul>
    </DropdownMenu>
  );
};

export default ViewMenu;
