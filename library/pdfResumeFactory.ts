import ResumeFactory from './resumeFactory';
import {jsPDF, jsPDFOptions, TextOptionsLight} from 'jspdf';
import * as Constants from '../constants';
import {ResumeConfig} from '../library/resumeConfig';
import Color from 'color';

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
    this.resume.rect(x, y, width, height, 'F');
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

  protected addCircle(x: number, y: number, radius: number, color: Color) {
    this.resume.setFillColor(color.hex());
    this.resume.circle(x, y, radius, 'F');
  }

  public getResume(): jsPDF {
    return this.resume;
  }
}
