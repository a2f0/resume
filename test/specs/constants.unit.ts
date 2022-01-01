import * as Constants from '../../constants';
import assert from 'assert';

describe('Constants Behavior', () => {
  // Use a point size that converts directly to pixels because there are browser quirks where a fractional pixel
  // cannot be used for a font size on a canvas, which is used to determine line wrapping (i.e. lines can have
  // different lengths on different browsers).
  // See this link:
  // https://stackoverflow.com/questions/46653569/canvas-measuretext-differences-on-browsers-are-huge
  it('should use a point size that does not convert to fractional pixels', async () => {
    // each pt is 1.3333 px
    const fontSizeInPixels = Constants.STANDARD_FONT_SIZE * (1 + 1 / 3);
    const remainder = fontSizeInPixels % 1;
    assert.strictEqual(remainder, 0);
  });
});
