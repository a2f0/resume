import React, {CSSProperties} from 'react';
import Color from 'color';
import {useDispatch} from 'react-redux';

import {
  setForegroundColor,
  setBackgroundColor,
} from '../library/resumeConfigSlice';
import {useAppSelector} from '../library/hooks';
import {selectForegroundColor} from '../library/resumeConfigSlice';

interface IProps {
  degrees: number;
  foreground: Color;
  background: Color;
}

export default function ColorInverter({
  degrees,
  foreground,
  background,
}: IProps) {
  const colorInverter: CSSProperties = {
    background: `linear-gradient(${degrees}deg, ${foreground} 50%, ${background} 50%)`,
    height: '30px',
    width: '30px',
    display: 'inline-block',
  };

  const dispatch = useDispatch();
  const foregroundColor = useAppSelector(selectForegroundColor);

  return (
    <div
      style={colorInverter}
      onClick={() => {
        if (foregroundColor === '#FFFFFF') {
          console.info('top');
          dispatch(setForegroundColor('#000000'));
          dispatch(setBackgroundColor('#FFFFFF'));
        } else {
          console.info('bottom');
          dispatch(setForegroundColor('#FFFFFF'));
          dispatch(setBackgroundColor('#000000'));
        }
      }}
    ></div>
  );
}
