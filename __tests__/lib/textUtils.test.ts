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
            text: 'This is ',
            isMatch: false,
          },
          {
            text: 'google',
            isMatch: true,
            url: 'https://google.com',
          },
          {
            text: '.',
            isMatch: false,
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
      const {matches, plainString} = extractLinks(
        'This is [google](https://google.com).'
      );
      expect(plainString).toBe('This is google.');
      expect(matches).not.toEqual([]);
      expect(matches.length).toBe(1);
      const {text, url, index} = matches[0];
      expect(text).toBe('google');
      expect(url).toBe('https://google.com');
      expect(index).toBe(8);
    });
    test('it extracts a link when the link text wraps across lines', () => {
      const {matches, plainString} = extractLinks(
        'This is [a long link that maks to google, intentionally of course, to wrap it](https://google.com).'
      );
      expect(plainString).toBe(
        'This is a long link that maks to google, intentionally of course, to wrap it.'
      );
      expect(matches).not.toEqual([]);
      expect(matches.length).toBe(1);
      expect(plainString).toBe(
        'This is a long link that maks to google, intentionally of course, to wrap it.'
      );
    });
    test('it does not extract a link when there is not one', () => {
      const {plainString, matches} = extractLinks('This is google.');
      expect(plainString).toBe('This is google.');
      expect(matches).toEqual([]);
      expect(matches.length).toBe(0);
    });
    test('it extracts multiple links', () => {
      const {matches, plainString} = extractLinks(
        'This is [google](https://google.com) and this is [yahoo](https://yahoo.com).'
      );
      expect(plainString).toBe('This is google and this is yahoo.');
      expect(matches).not.toEqual([]);
      expect(matches.length).toBe(2);
      let {text, url, index} = matches[0];
      expect(text).toBe('google');
      expect(url).toBe('https://google.com');
      expect(index).toBe(8);
      ({text, url, index} = matches[1]);
      expect(text).toBe('yahoo');
      expect(url).toBe('https://yahoo.com');
      expect(index).toBe(27);
    });
  });
});
