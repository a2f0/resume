import * as Constants from '../constants';
import resume from '../resume.json';
import {getFontString, getTextWidthInPoints, wrapLabel} from './textUtils';

export default abstract class ResumeFactory {
  protected abstract addCircle(
    x: number,
    y: number,
    radius: number,
    color: string
  ): void;
  protected abstract addRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ): void;
  protected abstract addText(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: string,
    text: string
  ): void;

  protected populateResume() {
    // Left Partition
    this.addRect(
      Constants.LEFT_PANEL_XPOS,
      Constants.LEFT_PANEL_YPOS,
      Constants.LEFT_PANEL_WIDTH,
      Constants.DOCUMENT_HEIGHT,
      Constants.LEFT_PANEL_COLOR
    );

    // Right Partition
    this.addRect(
      Constants.RIGHT_PANEL_XPOS,
      Constants.RIGHT_PANEL_YPOS,
      Constants.RIGHT_PANEL_WIDTH,
      Constants.DOCUMENT_HEIGHT,
      Constants.RIGHT_PANEL_COLOR
    );

    // First Name
    this.addText(
      Constants.FIRST_NAME_XPOS,
      Constants.FIRST_NAME_YPOS_MIDDLE,
      Constants.FIRST_NAME_SIZE,
      Constants.FONT_FAMILY,
      Constants.FIRST_NAME_COLOR,
      resume.first_name
    );

    // Last Name
    const firstNameWidthInPoints = getTextWidthInPoints(
      resume.first_name,
      getFontString(
        Constants.FIRST_NAME_WEIGHT,
        Constants.FIRST_NAME_SIZE,
        Constants.UNITS,
        Constants.FONT_FAMILY
      )
    );
    this.addText(
      Constants.FIRST_NAME_XPOS + firstNameWidthInPoints,
      Constants.LAST_NAME_YPOS_MIDDLE,
      Constants.LAST_NAME_SIZE,
      Constants.FONT_FAMILY,
      Constants.LAST_NAME_COLOR,
      resume.last_name
    );

    // Address Line
    this.addText(
      Constants.ADDRESS_XPOS,
      Constants.ADDRESS_YPOS_MIDDLE,
      Constants.ADDRESS_SIZE,
      Constants.FONT_FAMILY,
      Constants.ADDRESS_COLOR,
      resume.city_state
    );

    // Vertical Divider
    this.addRect(
      Constants.VERTICAL_DIVIDER_XPOS,
      Constants.VERTICAL_DIVIDER_YPOS,
      Constants.VERTICAL_DIVIDER_STROKE_WIDTH,
      Constants.VERTICAL_DIVIDER_HEIGHT,
      Constants.VERTICAL_DIVIDER_COLOR
    );

    // Address Separator
    this.addRect(
      Constants.ADDRESS_LINE_X1,
      Constants.ADDRESS_LINE_YPOS,
      Constants.ADDRESS_LINE_WIDTH,
      Constants.ADDRESS_LINE_STROKE_WIDTH,
      Constants.ADDRESS_LINE_COLOR
    );

    // Phone Number
    this.addText(
      Constants.PHONE_NUMBER_XPOS,
      Constants.PHONE_NUMBER_YPOS,
      Constants.PHONE_NUMBER_SIZE,
      Constants.FONT_FAMILY,
      Constants.PHONE_NUMBER_COLOR,
      resume.phone_number
    );

    // Email Address
    this.addText(
      Constants.EMAIL_XPOS,
      Constants.EMAIL_YPOS,
      Constants.EMAIL_SIZE,
      Constants.FONT_FAMILY,
      Constants.EMAIL_COLOR,
      resume.email
    );

    // Experience Header
    this.addText(
      Constants.EXPERIENCE_HEADER_XPOS,
      Constants.EXPERIENCE_HEADER_YPOS,
      Constants.EXPERIENCE_HEADER_SIZE,
      Constants.FONT_FAMILY,
      Constants.HEADER_COLOR,
      Constants.EXPERIENCE_HEADER
    );

    // Experience
    let currentPositionYPos = Constants.POSITION_TITLE_YPOS_START;
    const hyphenWidth = getTextWidthInPoints(
      '-',
      getFontString(
        Constants.POSITION_TITLE_WEIGHT,
        Constants.POSITION_TITLE_SIZE,
        Constants.UNITS,
        Constants.FONT_FAMILY
      )
    );

    // Individual Positions
    for (let i = 0; i < resume.experience.length; i++) {
      const position = resume.experience[i];

      // Position Bullet Point
      this.addCircle(
        Constants.VERTICAL_DIVIDER_XPOS,
        currentPositionYPos,
        Constants.POSITION_BULLET_RADIUS,
        Constants.POSITION_BULLET_COLOR
      );

      // Position Title
      this.addText(
        Constants.POSITION_TITLE_XPOS,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        Constants.POSITION_TITLE_COLOR,
        position.title
      );
      const titleWidth = getTextWidthInPoints(
        position.title,
        getFontString(
          Constants.POSITION_TITLE_WEIGHT,
          Constants.POSITION_TITLE_SIZE,
          Constants.UNITS,
          Constants.FONT_FAMILY
        )
      );

      // Position Date Range
      const positionDateRangeWidth = getTextWidthInPoints(
        position.date_range,
        getFontString(
          Constants.POSITION_DATE_RANGE_WEIGHT,
          Constants.POSITION_DATE_RANGE_SIZE,
          Constants.UNITS,
          Constants.FONT_FAMILY
        )
      );
      const positionDateRangeXPos =
        Constants.VERTICAL_DIVIDER_XPOS -
        Constants.LEFT_PANEL_MARGIN -
        positionDateRangeWidth;
      this.addText(
        positionDateRangeXPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        Constants.POSITION_TITLE_COLOR,
        position.date_range
      );

      // Hyphen After Title
      const hyphen1XPos =
        Constants.POSITION_TITLE_XPOS + titleWidth + Constants.HYPEN_SPACING;
      this.addText(
        hyphen1XPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        Constants.POSITION_TITLE_COLOR,
        '-'
      );

      // Company Name
      const companyNameXPos =
        hyphen1XPos + hyphenWidth + Constants.HYPEN_SPACING;
      this.addText(
        companyNameXPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        Constants.POSITION_TITLE_COLOR,
        position.company
      );
      const companyNameWidth = getTextWidthInPoints(
        position.company,
        getFontString(
          Constants.POSITION_TITLE_WEIGHT,
          Constants.POSITION_TITLE_SIZE,
          Constants.UNITS,
          Constants.FONT_FAMILY
        )
      );

      // Hyphen After Company Name
      const hyphen2XPos =
        companyNameXPos + companyNameWidth + Constants.HYPEN_SPACING;
      this.addText(
        hyphen2XPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        Constants.POSITION_TITLE_COLOR,
        '-'
      );

      // Company Location
      const companyLocationXPos =
        hyphen2XPos + hyphenWidth + Constants.HYPEN_SPACING;
      this.addText(
        companyLocationXPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        Constants.POSITION_TITLE_COLOR,
        position.location
      );

      // Accomplishments
      let accomplishmentYPos =
        currentPositionYPos + Constants.POSITION_TITLE_SIZE;
      const accomplishmentFont = getFontString(
        Constants.POSITION_ACCOMPLISHMENT_WEIGHT,
        Constants.POSITION_ACCOMPLISHMENT_SIZE,
        Constants.UNITS,
        Constants.FONT_FAMILY
      );

      for (let j = 0; j < position.accomplishments.length; j++) {
        const accomplishment = position.accomplishments[j];
        const accomplishmentLines = wrapLabel(
          accomplishment,
          Constants.POSITION_ACCOMPLISHMENT_MAX_WIDTH,
          accomplishmentFont
        );
        for (let k = 0; k < accomplishmentLines.length; k++) {
          const accomplismentLine = accomplishmentLines[k];
          this.addText(
            Constants.POSITION_ACCOMPLISHMENT_XPOS,
            accomplishmentYPos,
            Constants.POSITION_ACCOMPLISHMENT_SIZE,
            Constants.FONT_FAMILY,
            Constants.POSITION_ACCOMPLISHMENT_COLOR,
            accomplismentLine
          );
          accomplishmentYPos += Constants.POSITION_ACCOMPLISHMENT_SIZE;
        }
      }
      currentPositionYPos =
        accomplishmentYPos + Constants.POSITION_VERTICAL_SPACING;
    }

    // Education Header
    const educationHeaderYPos =
      currentPositionYPos + Constants.POSITION_TITLE_SIZE;
    this.addText(
      Constants.EDUCATION_HEADER_XPOS,
      educationHeaderYPos,
      Constants.EDUCATION_HEADER_SIZE,
      Constants.FONT_FAMILY,
      Constants.EDUCATION_HEADER_COLOR,
      Constants.EDUCATION_HEADER
    );
    const educationFont = getFontString(
      Constants.EDUCATION_WEIGHT,
      Constants.EDUCATION_SIZE,
      Constants.UNITS,
      Constants.FONT_FAMILY
    );

    let educationYPos =
      educationHeaderYPos + Constants.HEADER_SPACING + Constants.EDUCATION_SIZE;
    for (let m = 0; m < resume.education.length; m++) {
      const education = resume.education[m];

      // Bullet on Divider
      this.addCircle(
        Constants.VERTICAL_DIVIDER_XPOS,
        educationYPos,
        Constants.POSITION_BULLET_RADIUS,
        Constants.POSITION_BULLET_COLOR
      );

      // Commencement
      const commencementDateRangeWidth = getTextWidthInPoints(
        education.commencement,
        educationFont
      );
      const commencementXPos =
        Constants.VERTICAL_DIVIDER_XPOS -
        Constants.LEFT_PANEL_MARGIN -
        commencementDateRangeWidth;
      this.addText(
        commencementXPos,
        educationYPos,
        Constants.EDUCATION_SIZE,
        Constants.FONT_FAMILY,
        Constants.EDUCATION_COLOR,
        education.commencement
      );

      // Education Institution
      this.addText(
        Constants.EDUCATION_XPOS,
        educationYPos,
        Constants.EDUCATION_SIZE,
        Constants.FONT_FAMILY,
        Constants.EDUCATION_COLOR,
        education.institution
      );

      // Education Degree
      educationYPos += Constants.EDUCATION_SIZE;
      this.addText(
        Constants.EDUCATION_XPOS,
        educationYPos,
        Constants.EDUCATION_SIZE,
        Constants.FONT_FAMILY,
        Constants.EDUCATION_COLOR,
        education.credential
      );

      educationYPos +=
        Constants.EDUCATION_VERTICAL_SPACING + Constants.ADDRESS_SIZE;
    }
  }
}
