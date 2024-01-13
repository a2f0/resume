export function getTextWidthInPoints(
  text: string,
  font = '400 12pt Helvetica'
): number {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    context.font = font;
    const widthInPixels = context.measureText(text).width;
    const widthInPoints = widthInPixels * 0.75;
    return widthInPoints;
  } else {
    return 0;
  }
}

function breakString(
  word: string,
  maxWidth: number,
  font = '400 14pt Helvetica'
) {
  const hyphenCharacter = '-';
  const characters = word.split('');
  const lines = [] as string[];
  let currentLine = '';
  characters.forEach((character, index) => {
    const nextLine = `${currentLine}${character}`;
    const lineWidth = getTextWidthInPoints(nextLine, font);
    if (lineWidth >= maxWidth) {
      const currentCharacter = index + 1;
      const isLastLine = characters.length === currentCharacter;
      const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
      lines.push(isLastLine ? nextLine : hyphenatedNextLine);
      currentLine = '';
    } else {
      currentLine = nextLine;
    }
  });
  return {hyphenatedStrings: lines, remainingWord: currentLine};
}

export function wrapLabel(
  label: string,
  maxWidth: number,
  font: string // Example: '400 12pt Helvetica'
) {
  const extractLinksResult: ExtractLinksResult = extractLinks(label);
  const {plainString} = extractLinksResult;
  const words = plainString.split(' ');
  const lines: string[] = [];
  let nextLine = '';

  words.forEach((word, index) => {
    const wordLength = getTextWidthInPoints(`${word}`, font);
    const nextLineLength = getTextWidthInPoints(nextLine, font);
    if (wordLength > maxWidth) {
      const {hyphenatedStrings, remainingWord} = breakString(
        word,
        maxWidth,
        font
      );
      lines.push(nextLine, ...hyphenatedStrings);
      nextLine = remainingWord;
    } else if (nextLineLength + wordLength >= maxWidth) {
      lines.push(nextLine);
      nextLine = word;
    } else {
      nextLine = [nextLine, word].filter(Boolean).join(' ');
    }
    const currentWord = index + 1;
    const isLastWord = currentWord === words.length;
    if (isLastWord) {
      lines.push(nextLine);
    }
  });

  const filteredBlankLines = lines.filter(line => line !== '');
  return {lines: filteredBlankLines};
}

export function getFontString(
  weight: number,
  size: number,
  units: string,
  fontFamily: string
): string {
  let fontString = weight + ' ';
  fontString += size;
  fontString += units + ' ';
  fontString += fontFamily;
  return fontString;
}

const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
interface Match {
  text: string;
  url: string;
  index: number;
}

interface ExtractLinksResult {
  matches: Match[];
  plainString: string;
}

function createMarkDownUrl(label: string, url: string): string {
  return `[${label}](${url})`;
}

export function extractLinks(markdownString: string): ExtractLinksResult {
  const matches: Match[] = [];

  let match: RegExpExecArray | null;
  while ((match = regex.exec(markdownString)) !== null) {
    const [, text, url] = match;
    let index = markdownString.indexOf(match[0]);
    // Add 1 for the bracket.
    index = index + 1;
    const detectedValue: string = createMarkDownUrl(text, url);
    markdownString = markdownString.replace(detectedValue, text);
    matches.push({text, url, index});
  }

  const extractLinksResponse: ExtractLinksResult = {
    matches,
    plainString: markdownString,
  };

  return extractLinksResponse;
}
