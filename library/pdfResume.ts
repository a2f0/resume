import * as Constants from '../constants'
import resume from '../resume.json';
import { getTextWidthInPoints, wrapLabel } from './textUtils'
import { jsPDF, jsPDFOptions, TextOptionsLight  } from "jspdf";

export function pdfR() {

  const options: jsPDFOptions = {
    orientation: 'portrait',
    unit: Constants.UNITS,
    format: 'letter'
  }
  var doc = new jsPDF(options);

  // Left Partition
  doc.setFillColor(Constants.LEFT_PANEL_COLOR);
  doc.rect(
    Constants.LEFT_PANEL_XPOS,
    Constants.LEFT_PANEL_YPOS,
    Constants.LEFT_PANEL_WIDTH,
    Constants.DOCUMENT_HEIGHT,
    'F'
  );

  // Right Partition
  doc.setFillColor(Constants.RIGHT_PANEL_COLOR);
  doc.rect(
    Constants.LEFT_PANEL_WIDTH,
    Constants.RIGHT_PANEL_YPOS,
    Constants.RIGHT_PANEL_WIDTH,
    Constants.DOCUMENT_HEIGHT,
    'F'
  );

  // First Name
  doc.setFont("Helvetica")
  doc.setFontSize(Constants.FIRST_NAME_SIZE)
  doc.setTextColor(Constants.FIRST_NAME_COLOR)
  const first_name_options: TextOptionsLight = { baseline: "middle" }
  doc.text(
    resume.first_name,
    Constants.FIRST_NAME_XPOS,
    Constants.FIRST_NAME_YPOS_MIDDLE,
    first_name_options
  );

  // Last Name
  var firstNameWidth = doc.getTextWidth(resume.first_name);
  doc.setTextColor(Constants.LAST_NAME_COLOR)
  const last_name_options: TextOptionsLight = { baseline: "middle" }
  doc.text(
    resume.last_name,
    Constants.FIRST_NAME_XPOS + firstNameWidth,
    Constants.FIRST_NAME_YPOS_MIDDLE,
    first_name_options
  );

  // Address
  doc.setFont("Helvetica")
  doc.setFontSize(Constants.ADDRESS_SIZE)
  doc.setTextColor(Constants.ADDRESS_COLOR)
  const city_state_options: TextOptionsLight = { baseline: "middle" }
  doc.text(resume.city_state, Constants.ADDRESS_XPOS, Constants.ADDRESS_YPOS_MIDDLE, city_state_options );

  // Vertical Divider Line (Rectangle to establish width)
  doc.setFillColor(Constants.VERTICAL_DIVIDER_COLOR);
  doc.rect(
    Constants.VERTICAL_DIVIDER_XPOS,
    Constants.VERTICAL_DIVIDER_YPOS,
    Constants.VERTICAL_DIVIDER_STROKE_WIDTH,
    Constants.VERTICAL_DIVIDER_HEIGHT,
    'F'
  )

  // Address Separator Line
  doc.setFillColor(Constants.ADDRESS_LINE_COLOR);
  doc.rect(
    Constants.ADDRESS_LINE_X1,
    Constants.ADDRESS_LINE_YPOS,
    Constants.ADDRESS_LINE_WIDTH,
    Constants.ADDRESS_LINE_STROKE_WIDTH,
    'F'
  )

  // Phone Number
  doc.setFont("Helvetica")
  doc.setFontSize(Constants.PHONE_NUMBER_SIZE)
  doc.setTextColor(Constants.PHONE_NUMBER_WEIGHT)
  const phone_number_options: TextOptionsLight = { baseline: "middle" }
  doc.text(resume.phone_number, Constants.PHONE_NUMBER_XPOS, Constants.PHONE_NUMBER_YPOS, first_name_options );

  // Email Address
  doc.setFont("Helvetica")
  doc.setFontSize(Constants.EMAIL_SIZE)
  doc.setTextColor(Constants.EMAIL_COLOR)
  const email_options: TextOptionsLight = { baseline: "middle" }
  doc.text(resume.email, Constants.EMAIL_XPOS, Constants.EMAIL_YPOS, email_options );

  // Experience Header
  doc.setFont("Helvetica")
  doc.setFontSize(Constants.EXPERIENCE_HEADER_SIZE)
  doc.setTextColor(Constants.HEADER_COLOR)
  const experience_header_options: TextOptionsLight = { baseline: "middle" }
  doc.text(Constants.EXPERIENCE_HEADER, Constants.EXPERIENCE_HEADER_XPOS, Constants.EXPERIENCE_HEADER_YPOS, experience_header_options );

  var currentPositionYPos = Constants.POSITION_TITLE_YPOS_START
  var fontToMeasure = Constants.POSITION_TITLE_WEIGHT + " "
  fontToMeasure += Constants.POSITION_TITLE_SIZE
  fontToMeasure += Constants.UNITS + " "
  fontToMeasure += Constants.FONT_FAMILY
  const hyphenWidth = getTextWidthInPoints(
    '-',
    fontToMeasure
  )
  // Individual Positions
  for (var i = 0; i < resume.experience.length; i++) {
    const position = resume.experience[i];

    // Bullet on Divider
    doc.setFillColor(Constants.POSITION_BULLET_COLOR);
    doc.circle(Constants.VERTICAL_DIVIDER_XPOS, currentPositionYPos, Constants.POSITION_BULLET_RADIUS, 'F')

    // Position Title
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.POSITION_TITLE_SIZE)
    doc.setTextColor(Constants.POSITION_TITLE_COLOR)
    const position_title_options: TextOptionsLight = { baseline: "middle" }
    doc.text(position.title, Constants.POSITION_TITLE_XPOS, currentPositionYPos, position_title_options );
    const titleWidth = getTextWidthInPoints(
      position.title,
      fontToMeasure
    )

    // Position Date Range
    var positionDateRangeFont = Constants.POSITION_DATE_RANGE_WEIGHT + " "
    positionDateRangeFont += Constants.POSITION_DATE_RANGE_SIZE
    positionDateRangeFont += Constants.UNITS + " "
    positionDateRangeFont += Constants.FONT_FAMILY
    const positionDateRangeWidth = getTextWidthInPoints(
      position.date_range,
      positionDateRangeFont
    )
    const positionDateRangeXPos = Constants.VERTICAL_DIVIDER_XPOS - Constants.LEFT_PANEL_MARGIN - positionDateRangeWidth
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.POSITION_TITLE_SIZE)
    doc.setTextColor(Constants.POSITION_TITLE_COLOR)
    const position_date_range_options: TextOptionsLight = { baseline: "middle" }
    doc.text(position.date_range, positionDateRangeXPos, currentPositionYPos, position_date_range_options );

    // Hyphen After Title
    const hyphen1XPos = Constants.POSITION_TITLE_XPOS + titleWidth + Constants.HYPEN_SPACING
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.POSITION_TITLE_SIZE)
    doc.setTextColor(Constants.POSITION_TITLE_COLOR)
    const hyphen1_options: TextOptionsLight = { baseline: "middle" }
    doc.text('-', hyphen1XPos, currentPositionYPos, hyphen1_options );

    // Company Name
    const companyNameXPos =  hyphen1XPos + hyphenWidth + Constants.HYPEN_SPACING
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.POSITION_TITLE_SIZE)
    doc.setTextColor(Constants.POSITION_TITLE_COLOR)
    const company_name_options: TextOptionsLight = { baseline: "middle" }
    doc.text(position.company, companyNameXPos, currentPositionYPos, company_name_options );
    const companyNameWidth = getTextWidthInPoints(
      position.company,
      fontToMeasure
    )

    // Hyphen After Company Name
    const hyphen2XPos = companyNameXPos + companyNameWidth + Constants.HYPEN_SPACING
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.POSITION_TITLE_SIZE)
    doc.setTextColor(Constants.POSITION_TITLE_COLOR)
    const hyphen2_options: TextOptionsLight = { baseline: "middle" }
    doc.text('-', hyphen2XPos, currentPositionYPos, hyphen2_options );

    // Company Location
    const companyLocationXPos =  hyphen2XPos + hyphenWidth + Constants.HYPEN_SPACING
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.POSITION_TITLE_SIZE)
    doc.setTextColor(Constants.POSITION_TITLE_COLOR)
    const company_location_options: TextOptionsLight = { baseline: "middle" }
    doc.text(position.location, companyLocationXPos, currentPositionYPos, company_location_options );

    // Accomplishments
    var accomplishmentYPos = currentPositionYPos + Constants.POSITION_TITLE_SIZE;
    var accomplishmentFont = Constants.POSITION_ACCOMPLISHMENT_WEIGHT + " "
    accomplishmentFont += Constants.POSITION_ACCOMPLISHMENT_SIZE
    accomplishmentFont += Constants.UNITS + " "
    accomplishmentFont += Constants.FONT_FAMILY
    for (var j = 0; j < position.accomplishments.length; j++) {
      var accomplishment = position.accomplishments[j];
      const accomplishmentLines = wrapLabel(
        accomplishment,
        Constants.POSITION_ACCOMPLISHMENT_MAX_WIDTH,
        accomplishmentFont
      )
      for (var k = 0; k < accomplishmentLines.length; k++) {
        const accomplismentLine = accomplishmentLines[k];
        doc.setFont("Helvetica")
        doc.setFontSize(Constants.POSITION_ACCOMPLISHMENT_SIZE)
        doc.setTextColor(Constants.POSITION_ACCOMPLISHMENT_COLOR)
        const accomplishment_options : TextOptionsLight = { baseline: "middle" }
        doc.text(accomplismentLine, Constants.POSITION_ACCOMPLISHMENT_XPOS, accomplishmentYPos, company_location_options );
        accomplishmentYPos += Constants.POSITION_ACCOMPLISHMENT_SIZE;
      }
    }
    currentPositionYPos = accomplishmentYPos + Constants.POSITION_VERTICAL_SPACING;
  }

  // Education Header
  const educationHeaderYPos = currentPositionYPos + Constants.POSITION_TITLE_SIZE;
  doc.setFont("Helvetica")
  doc.setFontSize(Constants.EDUCATION_HEADER_SIZE)
  doc.setTextColor(Constants.EDUCATION_HEADER_COLOR)
  const education_header_options : TextOptionsLight = { baseline: "middle" }
  doc.text(Constants.EDUCATION_HEADER, Constants.POSITION_ACCOMPLISHMENT_XPOS, educationHeaderYPos, education_header_options );

  // Education Instances
  var educationYPos = educationHeaderYPos + Constants.HEADER_SPACING + Constants.EDUCATION_SIZE;
  var educationFont = Constants.EDUCATION_WEIGHT + " "
  educationFont += Constants.EDUCATION_SIZE
  educationFont += Constants.UNITS + " "
  educationFont += Constants.FONT_FAMILY

  for (var m = 0; m < resume.education.length; m++) {
    var education = resume.education[m];

    // Bullet on Divider
    doc.setFillColor(Constants.POSITION_BULLET_COLOR);
    doc.circle(Constants.VERTICAL_DIVIDER_XPOS, educationYPos, Constants.POSITION_BULLET_RADIUS, 'F')

    // Commencement
    var commencementDateRangeFont = Constants.EDUCATION_WEIGHT + " "
    commencementDateRangeFont += Constants.EDUCATION_SIZE
    commencementDateRangeFont += Constants.UNITS + " "
    commencementDateRangeFont += Constants.FONT_FAMILY
    const commencementDateRangeWidth = getTextWidthInPoints(
      education.commencement,
      commencementDateRangeFont
    )
    var commencementXPos = Constants.VERTICAL_DIVIDER_XPOS - Constants.LEFT_PANEL_MARGIN - commencementDateRangeWidth
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.EDUCATION_SIZE)
    doc.setTextColor(Constants.EDUCATION_COLOR)
    const commencement_options : TextOptionsLight = { baseline: "middle" }
    doc.text(education.commencement, commencementXPos, educationYPos, commencement_options );

    // Education Institution
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.EDUCATION_SIZE)
    doc.setTextColor(Constants.EDUCATION_COLOR)
    const education_institution_options : TextOptionsLight = { baseline: "middle" }
    doc.text(education.institution, Constants.EDUCATION_XPOS, educationYPos, education_institution_options );

    // Education Degree
    educationYPos += Constants.EDUCATION_SIZE
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.EDUCATION_SIZE)
    doc.setTextColor(Constants.EDUCATION_COLOR)
    const education_degree_options : TextOptionsLight = { baseline: "middle" }
    doc.text(education.credential, Constants.EDUCATION_XPOS, educationYPos, education_degree_options );

    educationYPos += Constants.EDUCATION_VERTICAL_SPACING + Constants.ADDRESS_SIZE
  }

  return doc.output('datauristring');

}
