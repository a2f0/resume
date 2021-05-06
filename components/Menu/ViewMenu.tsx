import {useDropDownMenu} from './MenuContext';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import MenuDivider from './MenuDivider';
import MenuListItem from './MenuListItem';

import {
  setForegroundColor,
  setBackgroundColor,
} from '../../library/resumeConfigSlice';

const ViewMenu = () => {
  const context = useDropDownMenu();
  const dispatch = useDispatch();

  const setBlackBackground = () => {
    dispatch(setForegroundColor('white'));
    dispatch(setBackgroundColor('black'));
    context.setIsActive(false);
  };

  const setWhiteBackground = () => {
    dispatch(setForegroundColor('black'));
    dispatch(setBackgroundColor('white'));
    context.setIsActive(false);
  };

  const dismissMenu = () => {
    context.setIsActive(false);
  };

  return (
    <ul>
      <MenuListItem>
        <a onClick={setBlackBackground}>Dark Background</a>
      </MenuListItem>
      <MenuListItem>
        <a onClick={setWhiteBackground}>Light Background</a>
      </MenuListItem>
      <MenuDivider />
      <MenuListItem>
        <Link href="/">
          <a onClick={dismissMenu}>SVG</a>
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link href="/pdf">
          <a onClick={dismissMenu}>PDF Preview</a>
        </Link>
      </MenuListItem>
    </ul>
  );
};

export default ViewMenu;
