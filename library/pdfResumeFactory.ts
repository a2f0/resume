import ResumeFactory from './resumeFactory'
import { jsPDF, jsPDFOptions, TextOptionsLight  } from "jspdf";
import * as Constants from '../constants'

export default class PdfResumeFactory extends ResumeFactory {

  resume: jsPDF;

  constructor() {
    super()
    const options: jsPDFOptions = {
      orientation: 'portrait',
      unit: Constants.UNITS,
      format: 'letter'
    }
    this.resume = new jsPDF(options);
    this.populateResume();
  }

  protected addRect(x: number, y: number, width: number, height: number, color: string) {
    this.resume.setFillColor(color);
    this.resume.rect(x, y, width, height, 'F')
  }

  protected addText(x: number, y: number, fontSize: number, fontFamily: string, color: string, text: string ) {
    this.resume.setFont(fontFamily)
    this.resume.setFontSize(fontSize)
    this.resume.setTextColor(color)
    const options: TextOptionsLight = { baseline: "middle" }
    this.resume.text( text, x, y, options );
  }

  protected addCircle(x: number, y: number, radius: number, color: string ) {
    this.resume.setFillColor(color);
    this.resume.circle(x, y, radius, 'F')
  }

  public getResume(): jsPDF  {
    return this.resume
  }

}
