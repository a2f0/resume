import * as Constants from '../constants';
import Color from 'color';
import {ResumeConfig} from '../library/resumeConfig';
import ResumeFactory from './resumeFactory';

export default class SvgResumeFactory extends ResumeFactory {
  resume: SVGElement;

  constructor(config: ResumeConfig) {
    super(config);
    this.resume = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.resume.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.resume.setAttribute('id', 'svgResume');
    this.populateResume();
  }

  protected addRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: Color,
    id: string
  ) {
    const rectToAdd = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'rect'
    );
    rectToAdd.style.fill = color.hex();
    rectToAdd.setAttribute('x', x + Constants.UNITS);
    rectToAdd.setAttribute('y', y + Constants.UNITS);
    rectToAdd.setAttribute('width', width + Constants.UNITS);
    rectToAdd.setAttribute('height', height + Constants.UNITS);
    rectToAdd.setAttribute('stroke', color.hex());
    rectToAdd.setAttribute('id', id);
    this.resume.appendChild(rectToAdd);
  }

  protected addText(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: Color,
    text: string,
    id: string
  ) {
    const textToAdd = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );
    textToAdd.setAttribute('x', x + Constants.UNITS);
    textToAdd.setAttribute('y', y + Constants.UNITS);
    textToAdd.setAttribute('font-size', fontSize + Constants.UNITS);
    textToAdd.setAttribute('font-family', fontFamily);
    textToAdd.setAttribute('fill', color.hex());
    textToAdd.setAttribute('dominant-baseline', 'middle');
    textToAdd.setAttribute('id', id);
    textToAdd.innerHTML = text;
    this.resume.appendChild(textToAdd);
  }

  protected addTextWithLink(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: Color,
    text: string,
    url: string,
    id: string
  ) {
    const linkToAdd = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'a'
    );
    linkToAdd.setAttribute('href', url);

    const textToAdd = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );
    textToAdd.setAttribute('x', x + Constants.UNITS);
    textToAdd.setAttribute('y', y + Constants.UNITS);
    textToAdd.setAttribute('font-size', fontSize + Constants.UNITS);
    textToAdd.setAttribute('font-family', fontFamily);
    textToAdd.setAttribute('fill', color.hex());
    textToAdd.setAttribute('dominant-baseline', 'middle');
    textToAdd.setAttribute('class', 'hoverable');
    textToAdd.innerHTML = text;
    textToAdd.setAttribute('id', id);
    linkToAdd.appendChild(textToAdd);
    this.resume.appendChild(linkToAdd);
  }

  protected addCircle(
    x: number,
    y: number,
    radius: number,
    color: Color,
    id: string
  ) {
    const circleToAdd = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    circleToAdd.setAttribute('cx', x + Constants.UNITS);
    circleToAdd.setAttribute('cy', y + Constants.UNITS);
    circleToAdd.setAttribute('r', radius + Constants.UNITS);
    circleToAdd.setAttribute('fill', color.hex());
    circleToAdd.setAttribute('id', id);
    this.resume.appendChild(circleToAdd);
  }

  protected addLine(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    color: Color,
    id: string
  ) {
    const lineToAdd = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    );
    lineToAdd.setAttribute('x1', x1 + Constants.UNITS);
    lineToAdd.setAttribute('x2', x2 + Constants.UNITS);
    lineToAdd.setAttribute('y1', y1 + Constants.UNITS);
    lineToAdd.setAttribute('y2', y2 + Constants.UNITS);
    lineToAdd.setAttribute('stroke-width', '.75' + Constants.UNITS);
    lineToAdd.setAttribute('stroke', color.hex());
    lineToAdd.setAttribute('id', id);
    this.resume.appendChild(lineToAdd);
  }

  public getResume(): SVGElement {
    return this.resume;
  }
}
