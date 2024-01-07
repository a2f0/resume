import * as Constants from '../../constants';
import {describe, expect, test} from 'vitest';
import {getFontString, wrapLabel} from '../../lib/textUtils';

describe('wrapLabel', () => {
  test('it does not wrap a short accomplishment.', () => {
    const accomplishmentFont = getFontString(
      Constants.POSITION_ACCOMPLISHMENT_WEIGHT,
      Constants.POSITION_ACCOMPLISHMENT_SIZE,
      Constants.UNITS,
      Constants.FONT_FAMILY
    );
    const {lines} = wrapLabel(
      'This is a short accomplishment.',
      Constants.POSITION_ACCOMPLISHMENT_MAX_WIDTH,
      accomplishmentFont
    );
    expect(window.innerWidth).toBe(1024);
    expect(window.innerHeight).toBe(768);
    expect(lines.length).toBe(1);
  });
});
