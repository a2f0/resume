import {afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';

import {createCanvas} from 'canvas';

const canvas = createCanvas(800, 600);

global.HTMLCanvasElement = class extends HTMLCanvasElement {
  constructor() {
    super();
  }
};

Object.setPrototypeOf(canvas, global.HTMLCanvasElement.prototype);

afterEach(cleanup);
