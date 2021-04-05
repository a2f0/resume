import ResumeFactory from './resumeFactory'
import * as Constants from '../constants'

export default class SvgResumeFactory extends ResumeFactory {

  resume: SVGElement;

  constructor() {
    super()
    this.resume = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.populateResume();
  }

  protected addRect(x: number, y: number, width: number, height: number, color: string) {
    var rectToAdd = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectToAdd.style.fill = color;
    rectToAdd.setAttribute("x",x + Constants.UNITS);
    rectToAdd.setAttribute("y",y + Constants.UNITS);
    rectToAdd.setAttribute("width", width + Constants.UNITS);
    rectToAdd.setAttribute("height", height + Constants.UNITS);
    this.resume.appendChild(rectToAdd);
  }

  protected addText(x: number, y: number, fontSize: number, fontFamily: string, color: string, text: string ){
    var textToAdd = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textToAdd.setAttribute("x",x + Constants.UNITS);
    textToAdd.setAttribute("y",y + Constants.UNITS);
    textToAdd.setAttribute("font-size", fontSize + Constants.UNITS);
    textToAdd.setAttribute("font-family", fontFamily);
    textToAdd.setAttribute("fill", color);
    textToAdd.setAttribute("dominant-baseline", "middle");
    textToAdd.innerHTML = text;
    this.resume.appendChild(textToAdd);
  }

  protected addCircle(x: number, y: number, radius: number, color: string ) {
    var circleToAdd = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circleToAdd.setAttribute("cx",x + Constants.UNITS);
    circleToAdd.setAttribute("cy",y + Constants.UNITS);
    circleToAdd.setAttribute("r", radius + Constants.UNITS);
    circleToAdd.setAttribute("fill", color)
    this.resume.appendChild(circleToAdd)
  }

  public getResume(): SVGElement {
    return this.resume
  }
}
