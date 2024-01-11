import {describe, expect, test} from 'vitest';
import {extractLinks, getFontString, wrapLabel} from '../../lib/textUtils';
import {fireEvent} from '@testing-library/react';
import {resumeConfiguration} from '../../configuration';

const {
  positionAccomplishmentWeight,
  positionAccomplishmentSize,
  positionAccomplishmentMaxWidth,
  units,
  fontFamily,
} = resumeConfiguration;

describe('textUtils', () => {
  describe('wrapLabel', () => {
    test('it does not wrap a short accomplishment.', () => {
      const accomplishmentFont = getFontString(
        positionAccomplishmentWeight,
        positionAccomplishmentSize,
        units,
        fontFamily
      );
      const {lines} = wrapLabel(
        'This is a short accomplishment.',
        positionAccomplishmentMaxWidth,
        accomplishmentFont
      );
      expect(window.innerWidth).toBe(1024);
      expect(window.innerHeight).toBe(768);
      expect(lines.length).toBe(1);
      expect(lines[0]).toBe('This is a short accomplishment.');
    });
    test('it wraps a long accomplishment.', () => {
      const accomplishmentFont = getFontString(
        positionAccomplishmentWeight,
        positionAccomplishmentSize,
        units,
        fontFamily
      );
      expect(window.innerWidth).toBe(1024);
      expect(window.innerHeight).toBe(768);
      window.innerWidth = 640;
      window.innerHeight = 480;
      fireEvent(window, new Event('resize'));
      expect(window.innerWidth).toBe(640);
      expect(window.innerHeight).toBe(480);
      const {lines} = wrapLabel(
        'This is a long accomplishment. It definitely wraps more than one line, intentionally of course, to make the test pass.',
        positionAccomplishmentMaxWidth,
        accomplishmentFont
      );
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
      expect(result.matches).not.toBe([]);
      expect(result.matches.length).toBe(1);
      const {text, url, index} = result.matches[0];
      expect(text).toBe('google');
      expect(url).toBe('https://google.com');
      expect(index).toBe(9);
      expect(result.plainString).toBe('This is google.');
    });
    test('it extracts a link when the link text wraps across lines', () => {
      const result = extractLinks(
        'This is [a long link that maks to google, intentionally of course, to wrap it.](https://google.com).'
      );
      expect(result).not.toBe([]);
      expect(result.matches.length).toBe(1);
    });
    test('it does not extract a link when there is not one', () => {
      const result = extractLinks('This is google.');
      expect(result.matches).not.toBe([]);
      expect(result.matches.length).toBe(0);
    });
  });
});
