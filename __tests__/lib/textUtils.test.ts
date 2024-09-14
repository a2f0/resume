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
    test('it extracts a link with an index position', () => {
      const {lines} = wrapLabel(
        'This is [google](https://google.com).',
        positionAccomplishmentMaxWidth,
        accomplishmentFont
      );
      expect(lines.length).toBe(1);
      expect(lines[0]).toBe('This is google.');
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
        'This is a long accomplishment. It definitely wraps more than one line, intentionally of course, exponentially increasing the chance for wrapping.',
        positionAccomplishmentMaxWidth,
        accomplishmentFont
      );
      expect(lines.length).toBe(2);
      expect(lines[0]).toBe(
        'This is a long accomplishment. It definitely wraps more than one line, intentionally of course,'
      );
      expect(lines[1]).toBe(
        'exponentially increasing the chance for wrapping.'
      );
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
      const {text, url, indexPosition} = matches[0];
      expect(text).toBe('google');
      expect(url).toBe('https://google.com');
      expect(indexPosition).toBe(9);
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
      let {text, url, indexPosition} = matches[0];
      expect(text).toBe('google');
      expect(url).toBe('https://google.com');
      expect(indexPosition).toBe(9);
      ({text, url, indexPosition} = matches[1]);
      expect(text).toBe('yahoo');
      expect(url).toBe('https://yahoo.com');
      expect(indexPosition).toBe(28);
    });
  });
});
