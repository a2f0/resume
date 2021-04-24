import {useMenu} from './MenuContext';
import {useDispatch} from 'react-redux';

import {
  setForegroundColor,
  setBackgroundColor,
} from '../../library/resumeConfigSlice';

const ViewMenu = () => {
  const context = useMenu();
  const dispatch = useDispatch();

  const setBlackForeground = () => {
    dispatch(setForegroundColor('#FFFFFF'));
    dispatch(setBackgroundColor('#000000'));
    context.setIsActive(false);
  };

  const setWhiteForeground = () => {
    dispatch(setForegroundColor('#000000'));
    dispatch(setBackgroundColor('#FFFFFF'));
    context.setIsActive(false);
  };

  return (
    <ul>
      <li>
        <a onClick={setBlackForeground}>Black Background</a>
      </li>
      <li>
        <a onClick={setWhiteForeground}>White Background</a>
      </li>
    </ul>
  );
};

export default ViewMenu;
