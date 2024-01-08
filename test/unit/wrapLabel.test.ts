import * as Constants from '../../constants';
import {describe, expect, test} from 'vitest';
import {extractLinks, getFontString, wrapLabel} from '../../lib/textUtils';

describe('textUtils', () => {
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
  describe('extractLinks', () => {
    test('it extracts a link with an index position', () => {
      const result = extractLinks('This is [google](https://google.com).');
      expect(result).not.toBe([]);
      expect(result.length).toBe(1);
      const {text, url, index, plainString} = result[0];
      expect(text).toBe('google');
      expect(url).toBe('https://google.com');
      expect(index).toBe(8);
      expect(plainString).toBe('This is google.');
    });
    test('it extracts a link when the link text wraps across lines', () => {
      const result = extractLinks(
        'This is [a long link that maks to google, intentionally of course, to wrap it.](https://google.com).'
      );
      expect(result).not.toBe([]);
      expect(result.length).toBe(1);
    });
    test('it does not extract a link when there is not one', () => {
      const result = extractLinks('This is google.');
      expect(result).not.toBe([]);
      expect(result.length).toBe(0);
    });
  });
});
