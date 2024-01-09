interface ICoordinate {
  x: number;
  y: number;
}

interface IResumeConfiguration {
  documentWidth: number;
  documentHeight: number;
  startX: number;
  startY: number;
  units: string;
  fontFamily: string;
  namePos: ICoordinate;
  nameSize: number;
  nameWeight: number;
  nameYPosMiddle: number;
  leftPanelPos: ICoordinate;
  leftPanelPercentage: number;
  leftPanelWidth: number;
  rightPanelPos: ICoordinate;
  rightPanelPercentage: number;
  rightPanelWidth: number;
}

class ResumeConfiguration implements IResumeConfiguration {
  documentWidth = 612;
  documentHeight = 792;
  startX = 18; // .25 inches from edge of page
  startY = 18; // .25 inches from edge of page
  units = 'pt';
  fontFamily = 'Helvetica';
  namePos = {x: this.startX, y: this.startY};
  nameWeight = 400;
  nameSize = 15;
  nameYPosMiddle = this.namePos.y + this.nameSize / 2;
  leftPanelPos = {x: 0, y: 0};
  leftPanelPercentage = 0.23;
  leftPanelWidth = this.leftPanelPercentage * this.documentWidth;
  rightPanelPos = {x: this.leftPanelWidth, y: 0};
  rightPanelPercentage = 1 - this.leftPanelPercentage;
  rightPanelWidth = this.rightPanelPercentage * this.documentWidth;
}

const resumeConfiguration = new ResumeConfiguration();

export {resumeConfiguration};
