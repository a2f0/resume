import React, {CSSProperties} from 'react';
import Color from 'color';

interface IProps {
  degrees: number;
  foreground: Color;
  background: Color;
}

const setColors = () => {
  console.info('Setting colors.');
};

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

  return <div style={colorInverter} onClick={setColors}></div>;
}
