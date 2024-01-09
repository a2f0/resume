interface ICoordinate {
  x: number;
  y: number;
}

interface IResumeConfiguration {
  documentWidth: number;
  documentHeight: number;
  startX: number;
  startY: number;
  firstNamePos: ICoordinate;
  firstNameSize: number;
  firstNameYPosMiddle: number;
  leftPanelPos: ICoordinate;
  rightPanelPos: ICoordinate;
  leftPanelPercentage: number;
  fontFamily: string;
}

class ResumeConfiguration implements IResumeConfiguration {
  documentWidth = 612;
  documentHeight = 792;
  startX = 18; // .25 inches from edge of page
  startY = 18; // .25 inches from edge of page
  fontFamily = 'Helvetica';
  firstNamePos = {x: this.startX, y: this.startY};
  firstNameSize = 15;
  firstNameYPosMiddle = this.firstNamePos.y + this.firstNameSize / 2;
  leftPanelPos = {x: 0, y: 0};
  leftPanelPercentage = 0.23;
  leftPanelWidth = this.leftPanelPercentage * this.documentWidth;
  rightPanelPos = {x: this.leftPanelWidth, y: 0};
  rightPanelPercentage = 1 - this.leftPanelPercentage;
  rightPanelWidth = this.rightPanelPercentage * this.documentWidth;
}

const resumeConfiguration = new ResumeConfiguration();

export {resumeConfiguration};
