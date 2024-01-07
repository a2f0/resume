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
    expect(lines[0]).toBe('This is a short accomplishment.');
  });
  test('it wraps a long accomplishment.', () => {
    const accomplishmentFont = getFontString(
      Constants.POSITION_ACCOMPLISHMENT_WEIGHT,
      Constants.POSITION_ACCOMPLISHMENT_SIZE,
      Constants.UNITS,
      Constants.FONT_FAMILY
    );
    const {lines} = wrapLabel(
      'This is a long accomplishment. It definitely wraps more than one line, intentionally of course, to make the test pass.',
      Constants.POSITION_ACCOMPLISHMENT_MAX_WIDTH,
      accomplishmentFont
    );
    expect(window.innerWidth).toBe(1024);
    expect(window.innerHeight).toBe(768);
    expect(lines.length).toBe(2);
    expect(lines[0]).toBe(
      'This is a long accomplishment. It definitely wraps more than one line, intentionally of course, to'
    );
    expect(lines[1]).toBe('make the test pass.');
  });
});
