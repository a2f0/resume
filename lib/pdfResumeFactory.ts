import * as Constants from '../constants';
import {TextOptionsLight, jsPDF, jsPDFOptions} from 'jspdf';
import Color from 'color';
import {ResumeConfig} from './resumeConfig';
import ResumeFactory from './resumeFactory';

export default class PdfResumeFactory extends ResumeFactory {
  resume: jsPDF;

  constructor(config: ResumeConfig) {
    super(config);
    const options: jsPDFOptions = {
      orientation: 'portrait',
      unit: Constants.UNITS,
      format: 'letter',
    };
    this.resume = new jsPDF(options);
    this.populateResume();
  }

  protected addRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: Color
  ) {
    this.resume.setFillColor(color.hex());
    this.resume.setDrawColor(color.hex());
    this.resume.rect(x, y, width, height, 'FD');
  }

  protected addText(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: Color,
    text: string
  ) {
    this.resume.setFont(fontFamily);
    this.resume.setFontSize(fontSize);
    this.resume.setTextColor(color.hex());
    const options: TextOptionsLight = {baseline: 'middle'};
    this.resume.text(text, x, y, options);
  }

  protected addTextWithLink(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: Color,
    text: string,
    url: string
  ) {
    this.resume.setFont(fontFamily);
    this.resume.setFontSize(fontSize);
    this.resume.setTextColor(color.hex());
    const options: TextOptionsLight = {baseline: 'middle'};
    this.resume.text(text, x, y, options);
    const dimensions = this.resume.getTextDimensions(text);
    const halfFontHeight = fontSize / 2;
    this.resume.link(x, y - halfFontHeight, dimensions.w, dimensions.h, {
      url: url,
    });
  }

  protected addLine(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    color: Color
  ) {
    this.resume.setLineWidth(0.75);
    this.resume.setDrawColor(color.hex());
    this.resume.line(x1, y1, x2, y2);
  }

  protected addCircle(x: number, y: number, radius: number, color: Color) {
    this.resume.setFillColor(color.hex());
    this.resume.circle(x, y, radius, 'F');
  }

  public getResume(): jsPDF {
    return this.resume;
  }
}
