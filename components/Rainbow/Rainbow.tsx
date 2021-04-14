import React, {CSSProperties} from 'react';
import Arc from './Arc';
import Color from 'color';

export default function Rainbow() {
  const backgroundColor = Color('black');
  const svg: CSSProperties = {
    background: backgroundColor.hex(),
    display: 'inline-block',
  };
  const svgWidth = 150;
  const svgHeight = 40;
  const arcRadiusStart = svgHeight;
  const arcStep = 3;
  const rainbowColors = [
    Color('#FF0000'),
    Color('#FF7F00'),
    Color('#FFFF00'),
    Color('#00FF00'),
    Color('#0000FF'),
    Color('#2E2B5F'),
    Color('#8B00FF'),
    backgroundColor,
  ];
  return (
    <svg width={svgWidth} height={svgHeight} style={svg}>
      {rainbowColors.map((value, index) => {
        return (
          <Arc
            key={index}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            arcRadius={arcRadiusStart - arcStep * index}
            color={value}
          />
        );
      })}
    </svg>
  );
}
