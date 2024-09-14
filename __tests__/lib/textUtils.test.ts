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

const accomplishmentFont = getFontString(
  positionAccomplishmentWeight,
  positionAccomplishmentSize,
  units,
  fontFamily
);

describe('textUtils', () => {
  describe('wrapLabel', () => {
    test('it does not wrap a short accomplishment.', () => {
      const chunkedLines = wrapLabel(
        'This is a short accomplishment.',
        positionAccomplishmentMaxWidth,
        accomplishmentFont
      );
      expect(window.innerWidth).toBe(1024);
      expect(window.innerHeight).toBe(768);
      expect(chunkedLines.length).toBe(1);
      expect(chunkedLines[0]).toEqual({
        chunks: [
          {
            isMatch: false,
            text: 'This is a short accomplishment.',
          },
        ],
        lineIndex: 0,
      });
    });
    test('it extracts a link with an index position', () => {
      const chunkedLines = wrapLabel(
        'This is [google](https://google.com).',
        positionAccomplishmentMaxWidth,
        accomplishmentFont
      );
      expect(chunkedLines.length).toBe(1);
      expect(chunkedLines[0]).toEqual({
        lineIndex: 0,
        chunks: [
          {
            text: 'This is g',
            isMatch: false,
          },
          {
            text: 'oogle.',
            isMatch: true,
            url: 'https://google.com',
          },
        ],
      });
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
      const chunkedLines = wrapLabel(
        'This is a long accomplishment. It definitely wraps more than one line, intentionally of course, exponentially increasing the chance for wrapping.',
        positionAccomplishmentMaxWidth,
        accomplishmentFont
      );
      expect(chunkedLines.length).toBe(2);
      expect(chunkedLines[0]).toEqual({
        lineIndex: 0,
        chunks: [
          {
            text: 'This is a long accomplishment. It definitely wraps more than one line, intentionally of course,',
            isMatch: false,
          },
        ],
      });
      expect(chunkedLines[1]).toEqual({
        lineIndex: 1,
        chunks: [
          {
            text: 'exponentially increasing the chance for wrapping.',
            isMatch: false,
          },
        ],
      });
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
        'This is [a long link that maks to google, intentionally of course, to wrap it](https://google.com).'
      );
      expect(result).not.toBe([]);
      expect(result.matches.length).toBe(1);
      expect(result.plainString).toBe(
        'This is a long link that maks to google, intentionally of course, to wrap it.'
      );
    });
    test('it does not extract a link when there is not one', () => {
      const result = extractLinks('This is google.');
      expect(result.matches).not.toBe([]);
      expect(result.matches.length).toBe(0);
    });
  });
});
