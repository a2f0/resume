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
  leftPanelPercentage: number;
}

class ResumeConfiguration implements IResumeConfiguration {
  documentWidth = 612;
  documentHeight = 792;
  startX = 18; // .25 inches from edge of page
  startY = 18; // .25 inches from edge of page
  firstNamePos = {x: this.startX, y: this.startY};
  firstNameSize = 15;
  firstNameYPosMiddle = this.firstNamePos.y + this.firstNameSize / 2;
  leftPanelPos = {x: 0, y: 0};
  leftPanelPercentage = 0.23;
  leftPanelWidth = this.leftPanelPercentage * this.documentWidth;
}

const resumeConfiguration = new ResumeConfiguration();

export {resumeConfiguration};
