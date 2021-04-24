import {useMenu} from './MenuContext';
import {useDispatch} from 'react-redux';

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

  return (
    <ul>
      <li>
        <a onClick={setBlackBackground}>Black Background</a>
      </li>
      <li>
        <a onClick={setWhiteBackground}>White Background</a>
      </li>
    </ul>
  );
};

export default ViewMenu;
