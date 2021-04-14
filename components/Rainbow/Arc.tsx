import React, {CSSProperties} from 'react';
import Color from 'color';

interface ArcProps {
  svgWidth: number;
  svgHeight: number;
  arcRadius: number;
  color: Color;
}

export default function Arc({svgWidth, svgHeight, arcRadius, color}: ArcProps) {
  const firstArc: CSSProperties = {
    fill: color.hex(),
  };

  const CX = svgWidth / 2 - arcRadius;
  const CY = svgHeight;

  return (
    <path
      d={`M ${CX}, ${CY} a ${arcRadius},${arcRadius} 0 1,1 ${arcRadius * 2}, 0`}
      style={firstArc}
    />
  );
}
