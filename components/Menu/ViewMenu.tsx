import {useMenu} from './MenuContext';
import {useDispatch} from 'react-redux';
import Link from 'next/link';

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
        <a onClick={setBlackBackground}>Black Background</a>
      </li>
      <li>
        <a onClick={setWhiteBackground}>White Background</a>
      </li>
      <li>
        <Link href="/">
          <a onClick={dismissMenu}>SVG</a>
        </Link>
      </li>
      <li>
        <Link href="/pdf">
          <a onClick={dismissMenu}>PDF</a>
        </Link>
      </li>
    </ul>
  );
};

export default ViewMenu;
