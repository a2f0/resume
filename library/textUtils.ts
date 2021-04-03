export function getTextWidthInPoints(text, font = "400 12pt Helvetica") {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const widthInPixels = context.measureText(text).width;
  const widthInPoints = widthInPixels * .75;
  return widthInPoints;
}

function breakString(word, maxWidth, font = "400 14pt Helvetica") {
  const hyphenCharacter = '-';
  const characters = word.split("");
  const lines = [];
  let currentLine = "";  characters.forEach((character, index) => {
    const nextLine = `${currentLine}${character}`;
    const lineWidth = getTextWidthInPoints(nextLine, font);
    if (lineWidth >= maxWidth) {
      const currentCharacter = index + 1;
      const isLastLine = characters.length === currentCharacter;
      const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
      lines.push(isLastLine ? nextLine : hyphenatedNextLine);
      currentLine = "";
    } else {
      currentLine = nextLine;
    }
  });  return { hyphenatedStrings: lines, remainingWord: currentLine };
}

export function wrapLabel(label, maxWidth, font = "400 12pt Helvetica") {
  const words = label.split(" ");
  const completedLines = [];
  let nextLine = "";  words.forEach((word, index) => {
    const wordLength = getTextWidthInPoints(`${word}`, font);
    const nextLineLength = getTextWidthInPoints(nextLine, font);
    if (wordLength > maxWidth) {
      const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth, font);
      completedLines.push(nextLine, ...hyphenatedStrings);
      nextLine = remainingWord;
    } else if (nextLineLength + wordLength >= maxWidth) {
      completedLines.push(nextLine);
      nextLine = word;
    } else {
      nextLine = [nextLine, word].filter(Boolean).join(" ");
    }
    const currentWord = index + 1;
    const isLastWord = currentWord === words.length;
    if (isLastWord) {
      completedLines.push(nextLine);
    }
  });
  return completedLines.filter(line => line !== "");
}
