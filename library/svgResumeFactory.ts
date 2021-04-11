import ResumeFactory from './resumeFactory';
import * as Constants from '../constants';
import {ResumeConfig} from '../library/resumeConfig';
import Color from 'color';

export default class SvgResumeFactory extends ResumeFactory {
  resume: SVGElement;

  constructor(config: ResumeConfig) {
    super(config);
    this.resume = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.populateResume();
  }

  protected addRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: Color
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
    this.resume.appendChild(rectToAdd);
  }

  protected addText(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: Color,
    text: string
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
    textToAdd.innerHTML = text;
    this.resume.appendChild(textToAdd);
  }

  protected addCircle(x: number, y: number, radius: number, color: Color) {
    const circleToAdd = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    circleToAdd.setAttribute('cx', x + Constants.UNITS);
    circleToAdd.setAttribute('cy', y + Constants.UNITS);
    circleToAdd.setAttribute('r', radius + Constants.UNITS);
    circleToAdd.setAttribute('fill', color.hex());
    this.resume.appendChild(circleToAdd);
  }

  public getResume(): SVGElement {
    return this.resume;
  }
}
