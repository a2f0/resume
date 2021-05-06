import {useMenu} from './MenuContext';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import {MenuDivider} from './MenuDivider';

import {
  setForegroundColor,
  setBackgroundColor,
} from '../../library/resumeConfigSlice';

const ViewMenu = () => {
  const context = useMenu();
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
      <li>
        <a onClick={setBlackBackground}>Dark Background</a>
      </li>
      <li>
        <a onClick={setWhiteBackground}>Light Background</a>
      </li>
      <MenuDivider />
      <li>
        <Link href="/">
          <a onClick={dismissMenu}>SVG</a>
        </Link>
      </li>
      <li>
        <Link href="/pdf">
          <a onClick={dismissMenu}>PDF Preview</a>
        </Link>
      </li>
    </ul>
  );
};

export default ViewMenu;
