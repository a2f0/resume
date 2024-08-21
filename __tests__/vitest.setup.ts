import {afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';

import {createCanvas} from 'canvas';

// Add the canvas implementation to the global scope
global.HTMLCanvasElement = createCanvas().constructor;

afterEach(cleanup);
