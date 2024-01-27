import Color from 'color';
import {ResumeConfig} from './resumeConfig';
import ResumeFactory from './resumeFactory';
import {resumeConfiguration} from '../configuration';

const {units} = resumeConfiguration;

function scaleValueWithUnit(value: number, scale: number): string {
  return value * scale + units
}

function scaleValue(value: number, scale: number): number {
  return value * scale
}

export default class CanvasResumeFactory extends ResumeFactory {
  resume: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scale: number
  
  constructor(config: ResumeConfig, width: number, height: number, scale: number) {
    super(config);
    this.resume = document.createElement('canvas');
    this.resume.setAttribute('width', scaleValueWithUnit(width, scale));
    this.resume.setAttribute('height', scaleValueWithUnit(height, scale));
    this.scale = scale
    const context = this.resume.getContext("2d") 
    if (context == null) {
      throw new Error ('2d context cannot be null')
    }
    this.ctx = context
    
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
    this.ctx.fillStyle = color.hex();
    this.ctx.fillRect(scaleValue(x, this.scale), scaleValue(y, this.scale), scaleValue(width, this.scale), scaleValue(height, this.scale));
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
    
  }

  protected addCircle(
    x: number,
    y: number,
    radius: number,
    color: Color,
    id: string
  ) {
    
  }

  protected addLine(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    color: Color,
    id: string
  ) {
    
  }

  public getResume(): HTMLCanvasElement {
    return this.resume;
  }
}
