import * as Constants from '../constants';
import {getFontString, getTextWidthInPoints, wrapLabel} from './textUtils';
import Color from 'color';
import {ResumeConfig} from '../library/resumeConfig';
import resume from '../resume.json';

export default abstract class ResumeFactory {
  foregroundColor: Color = Color(Constants.LIGHT);
  backgroundColor: Color = Color(Constants.DARK);
  highlightColor: Color = Color('#909090');

  constructor(config: ResumeConfig) {
    this.foregroundColor = config.foregroundColor;
    this.backgroundColor = config.backgroundColor;
  }
  protected abstract addCircle(
    x: number,
    y: number,
    radius: number,
    color: Color,
    id: string
  ): void;
  protected abstract addRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: Color,
    id: string
  ): void;
  protected abstract addText(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: Color,
    text: string,
    id: string
  ): void;
  protected abstract addTextWithLink(
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: Color,
    text: string,
    url: string,
    id: string
  ): void;
  protected abstract addLine(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    color: Color,
    id: string
  ): void;

  protected populateResume() {
    this.addRect(
      Constants.LEFT_PANEL_XPOS,
      Constants.LEFT_PANEL_YPOS,
      Constants.LEFT_PANEL_WIDTH,
      Constants.DOCUMENT_HEIGHT,
      this.backgroundColor,
      'leftPartition'
    );

    this.addRect(
      Constants.RIGHT_PANEL_XPOS,
      Constants.RIGHT_PANEL_YPOS,
      Constants.RIGHT_PANEL_WIDTH,
      Constants.DOCUMENT_HEIGHT,
      this.backgroundColor,
      'rightPartition'
    );

    this.addText(
      Constants.FIRST_NAME_XPOS,
      Constants.FIRST_NAME_YPOS_MIDDLE,
      Constants.FIRST_NAME_SIZE,
      Constants.FONT_FAMILY,
      this.foregroundColor,
      resume.first_name,
      'firstName'
    );

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
      this.highlightColor,
      resume.last_name,
      'lastName'
    );

    this.addText(
      Constants.ADDRESS_XPOS,
      Constants.ADDRESS_YPOS_MIDDLE,
      Constants.ADDRESS_SIZE,
      Constants.FONT_FAMILY,
      this.foregroundColor,
      resume.city_state,
      'addressLine'
    );

    this.addLine(
      Constants.VERTICAL_DIVIDER_XPOS,
      Constants.VERTICAL_DIVIDER_XPOS,
      Constants.VERTICAL_DIVIDER_YPOS1,
      Constants.VERTICAL_DIVIDER_YPOS1 + Constants.VERTICAL_DIVIDER_HEIGHT,
      this.highlightColor,
      'verticalDivider'
    );

    this.addLine(
      Constants.ADDRESS_LINE_X1,
      Constants.ADDRESS_LINE_X1 + Constants.ADDRESS_LINE_WIDTH,
      Constants.ADDRESS_LINE_YPOS,
      Constants.ADDRESS_LINE_YPOS,
      this.highlightColor,
      'addressSeparator'
    );

    this.addTextWithLink(
      Constants.PHONE_NUMBER_XPOS,
      Constants.PHONE_NUMBER_YPOS,
      Constants.PHONE_NUMBER_SIZE,
      Constants.FONT_FAMILY,
      this.foregroundColor,
      resume.phone_number.number,
      resume.phone_number.uri,
      'phoneNumber'
    );

    this.addTextWithLink(
      Constants.EMAIL_XPOS,
      Constants.EMAIL_YPOS,
      Constants.EMAIL_SIZE,
      Constants.FONT_FAMILY,
      this.foregroundColor,
      resume.email.email,
      resume.email.uri,
      'emailAddress'
    );

    this.addText(
      Constants.EXPERIENCE_HEADER_XPOS,
      Constants.EXPERIENCE_HEADER_YPOS,
      Constants.EXPERIENCE_HEADER_SIZE,
      Constants.FONT_FAMILY,
      this.highlightColor,
      Constants.EXPERIENCE_HEADER,
      'experienceHeader'
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

      this.addCircle(
        Constants.VERTICAL_DIVIDER_XPOS,
        currentPositionYPos,
        Constants.POSITION_BULLET_RADIUS,
        this.highlightColor,
        'positionBulletPoint-' + i
      );

      this.addText(
        Constants.POSITION_TITLE_XPOS,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        position.title,
        'positionTitle-' + i
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
        Constants.CENTER_BULLET_MARGIN -
        positionDateRangeWidth;
      this.addText(
        positionDateRangeXPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        position.date_range,
        'positionDateRange-' + i
      );

      // Hyphen After Title
      const hyphen1XPos =
        Constants.POSITION_TITLE_XPOS + titleWidth + Constants.HYPEN_SPACING;
      this.addText(
        hyphen1XPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        '-',
        'hyphenAfterTitle-' + i
      );

      const companyNameXPos =
        hyphen1XPos + hyphenWidth + Constants.HYPEN_SPACING;
      this.addTextWithLink(
        companyNameXPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        position.company,
        position.url,
        'positionCompanyName-' + i
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
        this.foregroundColor,
        '-',
        'hyphenAfterCompanyName-' + i
      );

      // Company Location
      const companyLocationXPos =
        hyphen2XPos + hyphenWidth + Constants.HYPEN_SPACING;
      this.addText(
        companyLocationXPos,
        currentPositionYPos,
        Constants.POSITION_TITLE_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        position.location,
        'positionCompanyLocation-'
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
        this.addCircle(
          Constants.POSITION_ACCOMPLISHMENT_BULLET_XPOS,
          accomplishmentYPos,
          Constants.POSITION_ACCOMPLISHMENT_BULLET_RADIUS,
          this.foregroundColor,
          `accomplishmentBullet-${i}-${j}`
        );
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
            this.foregroundColor,
            accomplismentLine,
            `positionAccomplishmentLine-${i}-${j}-${k}`
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
      this.highlightColor,
      Constants.EDUCATION_HEADER,
      'educationHeader'
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

      this.addCircle(
        Constants.VERTICAL_DIVIDER_XPOS,
        educationYPos,
        Constants.POSITION_BULLET_RADIUS,
        this.highlightColor,
        `educationBullet-${m}`
      );

      const commencementDateRangeWidth = getTextWidthInPoints(
        education.commencement,
        educationFont
      );
      const commencementXPos =
        Constants.VERTICAL_DIVIDER_XPOS -
        Constants.CENTER_BULLET_MARGIN -
        commencementDateRangeWidth;
      this.addText(
        commencementXPos,
        educationYPos,
        Constants.EDUCATION_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        education.commencement,
        `educationCommencement-${m}`
      );

      // Education Institution
      this.addTextWithLink(
        Constants.EDUCATION_XPOS,
        educationYPos,
        Constants.EDUCATION_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        education.institution,
        education.url,
        `educationInstitution-${m}`
      );

      // Education Degree
      educationYPos += Constants.EDUCATION_SIZE;
      this.addText(
        Constants.EDUCATION_XPOS,
        educationYPos,
        Constants.EDUCATION_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        education.credential,
        `educationDegree-${m}`
      );

      educationYPos +=
        Constants.EDUCATION_VERTICAL_SPACING + Constants.ADDRESS_SIZE;
    }

    // Internet
    this.addText(
      Constants.FIRST_NAME_XPOS,
      Constants.INTERNET_PRESENCES_HEADER_YPOS,
      Constants.INTERNET_PRESENCES_HEADER_SIZE,
      Constants.FONT_FAMILY,
      this.highlightColor,
      'Internet',
      'internetLabel'
    );

    // Presences
    const interenetWidthInPoints = getTextWidthInPoints(
      'Internet',
      getFontString(
        Constants.FIRST_NAME_WEIGHT,
        Constants.INTERNET_PRESENCES_HEADER_SIZE,
        Constants.UNITS,
        Constants.FONT_FAMILY
      )
    );
    this.addText(
      Constants.FIRST_NAME_XPOS + interenetWidthInPoints,
      Constants.INTERNET_PRESENCES_HEADER_YPOS,
      Constants.INTERNET_PRESENCES_HEADER_SIZE,
      Constants.FONT_FAMILY,
      this.foregroundColor,
      'Presences',
      'PresencesLabel'
    );

    // Internet Presences Separator
    this.addLine(
      Constants.VERTICAL_DIVIDER_XPOS,
      Constants.VERTICAL_DIVIDER_XPOS - Constants.INTERNET_PRESENCES_LINE_WIDTH,
      Constants.INTERNET_PRESENCES_LINE_YPOS,
      Constants.INTERNET_PRESENCES_LINE_YPOS,
      this.highlightColor,
      'internetPresencesSeparator'
    );

    let internetPresenceYPos = Constants.INTERNET_PRESENCES_YPOS;
    for (let n = 0; n < resume.internet_presences.length; n++) {
      const internetPresence = resume.internet_presences[n];
      // URL
      this.addTextWithLink(
        Constants.FIRST_NAME_XPOS,
        internetPresenceYPos,
        Constants.INTERNET_PRESENCES_SIZE,
        Constants.FONT_FAMILY,
        this.foregroundColor,
        internetPresence,
        internetPresence,
        `internetPresences-${n}`
      );
      internetPresenceYPos += Constants.INTERNET_PRESENCES_SIZE;
    }
  }
}
