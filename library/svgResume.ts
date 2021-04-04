import * as Constants from '../constants'
import resume from '../resume.json';
import { getTextWidthInPoints, wrapLabel } from './textUtils'

export function svgR() {
  // The SVG Itself
  var svgResume = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgResume.setAttribute('id', 'svgResume');

  // Left Partition
  var leftCanvasRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  leftCanvasRect.style.fill = Constants.LEFT_PANEL_COLOR;
  leftCanvasRect.setAttribute("width", Constants.LEFT_PANEL_WIDTH + Constants.UNITS);
  leftCanvasRect.setAttribute("height", Constants.DOCUMENT_HEIGHT + Constants.UNITS);
  svgResume.appendChild(leftCanvasRect);

  // Right Partition
  var rightCanvasRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rightCanvasRect.style.fill = Constants.RIGHT_PANEL_COLOR;
  rightCanvasRect.setAttribute("x", Constants.RIGHT_PANEL_XPOS + Constants.UNITS);
  rightCanvasRect.setAttribute("width", Constants.RIGHT_PANEL_WIDTH + Constants.UNITS);
  rightCanvasRect.setAttribute("height",Constants.DOCUMENT_HEIGHT + Constants.UNITS);
  svgResume.appendChild(rightCanvasRect);

  // First Name
  var firstName = document.createElementNS("http://www.w3.org/2000/svg","text");
  firstName.setAttribute("id","firstName");
  firstName.setAttribute("x",Constants.FIRST_NAME_XPOS + Constants.UNITS);
  firstName.setAttribute("y",Constants.FIRST_NAME_YPOS_MIDDLE + Constants.UNITS);
  firstName.setAttribute("font-size", Constants.FIRST_NAME_SIZE + Constants.UNITS);
  firstName.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
  firstName.setAttribute("dominant-baseline", "middle");
  firstName.setAttribute("fill", Constants.FIRST_NAME_COLOR);
  firstName.innerHTML = resume.first_name;
  svgResume.appendChild(firstName);

  // Last Name
  var fontToMeasure =  Constants.FIRST_NAME_WEIGHT + " "
  fontToMeasure += Constants.FIRST_NAME_SIZE
  fontToMeasure += Constants.UNITS + " "
  fontToMeasure += Constants.SVG_FONT_FAMILY
  const firstNameWidthInPoints = getTextWidthInPoints(
    resume.first_name,
    fontToMeasure
  )
  var lastName = document.createElementNS("http://www.w3.org/2000/svg","text");
  lastName.setAttribute("id","firstName");
  lastName.setAttribute("x",Constants.FIRST_NAME_XPOS + firstNameWidthInPoints + Constants.UNITS);
  lastName.setAttribute("y",Constants.LAST_NAME_YPOS_MIDDLE + Constants.UNITS);
  lastName.setAttribute("font-size", Constants.LAST_NAME_SIZE + Constants.UNITS);
  lastName.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
  lastName.setAttribute("dominant-baseline", "middle");
  lastName.setAttribute("fill", Constants.LAST_NAME_COLOR);
  lastName.innerHTML = resume.last_name;
  svgResume.appendChild(lastName);

  // Address Line
  var addressLine = document.createElementNS("http://www.w3.org/2000/svg","text");
  addressLine.setAttribute("id","addressLine");
  addressLine.setAttribute("x",Constants.ADDRESS_XPOS + Constants.UNITS);
  addressLine.setAttribute("y",Constants.ADDRESS_YPOS_MIDDLE + Constants.UNITS);
  addressLine.setAttribute("font-size", Constants.ADDRESS_SIZE + Constants.UNITS);
  addressLine.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
  addressLine.setAttribute("dominant-baseline", "middle");
  addressLine.setAttribute("fill", Constants.ADDRESS_COLOR);
  addressLine.innerHTML = resume.city_state;
  svgResume.appendChild(addressLine);

  // Vertical Divider Line
  var verticalDividerLine = document.createElementNS("http://www.w3.org/2000/svg","line");
  verticalDividerLine.setAttribute("id","verticalDividerLine");
  verticalDividerLine.setAttribute("x1",Constants.VERTICAL_DIVIDER_XPOS + Constants.UNITS);
  verticalDividerLine.setAttribute("x2",Constants.VERTICAL_DIVIDER_XPOS + Constants.UNITS);
  verticalDividerLine.setAttribute("y1",Constants.VERTICAL_DIVIDER_YPOS + Constants.UNITS);
  verticalDividerLine.setAttribute("y2",Constants.VERTICAL_DIVIDER_HEIGHT + Constants.UNITS);
  verticalDividerLine.setAttribute("stroke", Constants.VERTICAL_DIVIDER_COLOR)
  verticalDividerLine.setAttribute("stroke-width", Constants.VERTICAL_DIVIDER_STROKE_WIDTH + Constants.UNITS)
  svgResume.appendChild(verticalDividerLine);

  // Address Separator Line
  var addressSeparatorLine = document.createElementNS("http://www.w3.org/2000/svg","line");
  addressSeparatorLine.setAttribute("id","addressSeparatorLine");
  addressSeparatorLine.setAttribute("x1",Constants.ADDRESS_LINE_X1 + Constants.UNITS);
  addressSeparatorLine.setAttribute("x2",Constants.ADDRESS_LINE_X2  + Constants.UNITS);
  addressSeparatorLine.setAttribute("y1",Constants.ADDRESS_LINE_YPOS + Constants.UNITS);
  addressSeparatorLine.setAttribute("y2",Constants.ADDRESS_LINE_YPOS + Constants.UNITS);
  addressSeparatorLine.setAttribute("stroke", Constants.ADDRESS_LINE_COLOR)
  addressSeparatorLine.setAttribute("stroke-width", Constants.ADDRESS_LINE_STROKE_WIDTH + Constants.UNITS)
  svgResume.appendChild(addressSeparatorLine);

  // Phone Number
  var phoneNumber = document.createElementNS("http://www.w3.org/2000/svg","text");
  phoneNumber.setAttribute("id","addressLine");
  phoneNumber.setAttribute("x",Constants.PHONE_NUMBER_XPOS + Constants.UNITS);
  phoneNumber.setAttribute("y",Constants.PHONE_NUMBER_YPOS + Constants.UNITS);
  phoneNumber.setAttribute("font-size", Constants.PHONE_NUMBER_SIZE + Constants.UNITS);
  phoneNumber.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
  phoneNumber.setAttribute("dominant-baseline", "middle");
  phoneNumber.setAttribute("fill", Constants.PHONE_NUMBER_COLOR);
  phoneNumber.innerHTML = resume.phone_number;
  svgResume.appendChild(phoneNumber);

  // Email
  var emailAddress = document.createElementNS("http://www.w3.org/2000/svg","text");
  emailAddress.setAttribute("id","phoneNumber");
  emailAddress.setAttribute("x",Constants.EMAIL_XPOS + Constants.UNITS);
  emailAddress.setAttribute("y",Constants.EMAIL_YPOS + Constants.UNITS);
  emailAddress.setAttribute("font-size", Constants.EMAIL_SIZE + Constants.UNITS);
  emailAddress.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
  emailAddress.setAttribute("dominant-baseline", "middle");
  emailAddress.setAttribute("fill", Constants.EMAIL_COLOR);
  emailAddress.innerHTML = resume.email;
  svgResume.appendChild(emailAddress);

  // Experience Header
  var emailAddress = document.createElementNS("http://www.w3.org/2000/svg","text");
  emailAddress.setAttribute("id","phoneNumber");
  emailAddress.setAttribute("x",Constants.EXPERIENCE_HEADER_XPOS + Constants.UNITS);
  emailAddress.setAttribute("y",Constants.EXPERIENCE_HEADER_YPOS + Constants.UNITS);
  emailAddress.setAttribute("font-size", Constants.EXPERIENCE_HEADER_SIZE + Constants.UNITS);
  emailAddress.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
  emailAddress.setAttribute("dominant-baseline", "middle");
  emailAddress.setAttribute("fill", Constants.HEADER_COLOR);
  emailAddress.innerHTML = Constants.EXPERIENCE_HEADER;
  svgResume.appendChild(emailAddress);

  // Positions Global
  var currentPositionYPos = Constants.POSITION_TITLE_YPOS_START
  var fontToMeasure = Constants.POSITION_TITLE_WEIGHT + " "
  fontToMeasure += Constants.POSITION_TITLE_SIZE
  fontToMeasure += Constants.UNITS + " "
  fontToMeasure += Constants.SVG_FONT_FAMILY
  const hyphenWidth = getTextWidthInPoints(
    '-',
    fontToMeasure
  )
  // Individual Positions
  for (var i = 0; i < resume.experience.length; i++) {
    const position = resume.experience[i];

    // Bullet on Divider
    var bulletOnDivider = document.createElementNS("http://www.w3.org/2000/svg","circle");
    bulletOnDivider.setAttribute("cx",Constants.VERTICAL_DIVIDER_XPOS + Constants.UNITS);
    bulletOnDivider.setAttribute("cy",currentPositionYPos + Constants.UNITS);
    bulletOnDivider.setAttribute("r", Constants.POSITION_BULLET_RADIUS + Constants.UNITS);
    bulletOnDivider.setAttribute("fill", Constants.POSITION_BULLET_COLOR)
    svgResume.appendChild(bulletOnDivider)

    // Position Title
    var posititionTitle = document.createElementNS("http://www.w3.org/2000/svg","text");
    posititionTitle.setAttribute("x",Constants.POSITION_TITLE_XPOS + Constants.UNITS);
    posititionTitle.setAttribute("y",currentPositionYPos + Constants.UNITS);
    posititionTitle.setAttribute("font-size", Constants.POSITION_TITLE_SIZE + Constants.UNITS);
    posititionTitle.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    posititionTitle.setAttribute("dominant-baseline", "middle");
    posititionTitle.setAttribute("fill", Constants.POSITION_TITLE_COLOR);
    posititionTitle.innerHTML = position.title;
    svgResume.appendChild(posititionTitle)
    const titleWidth = getTextWidthInPoints(
      position.title,
      fontToMeasure
    )

    // Position Date Range
    var positionDateRangeFont = Constants.POSITION_DATE_RANGE_WEIGHT + " "
    positionDateRangeFont += Constants.POSITION_DATE_RANGE_SIZE
    positionDateRangeFont += Constants.UNITS + " "
    positionDateRangeFont += Constants.SVG_FONT_FAMILY
    const positionDateRangeWidth = getTextWidthInPoints(
      position.date_range,
      positionDateRangeFont
    )
    const positionDateRangeXPos = Constants.VERTICAL_DIVIDER_XPOS - Constants.LEFT_PANEL_MARGIN - positionDateRangeWidth
    var positionDateRange = document.createElementNS("http://www.w3.org/2000/svg","text");
    positionDateRange.setAttribute("x",positionDateRangeXPos + Constants.UNITS);
    positionDateRange.setAttribute("y",currentPositionYPos + Constants.UNITS);
    positionDateRange.setAttribute("font-size", Constants.POSITION_TITLE_SIZE + Constants.UNITS);
    positionDateRange.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    positionDateRange.setAttribute("dominant-baseline", "middle");
    positionDateRange.setAttribute("fill", Constants.POSITION_TITLE_COLOR);
    positionDateRange.innerHTML = position.date_range;
    svgResume.appendChild(positionDateRange)

    // Hyphen After Title
    var hyphen1 = document.createElementNS("http://www.w3.org/2000/svg","text");
    const hyphen1XPos = Constants.POSITION_TITLE_XPOS + titleWidth + Constants.HYPEN_SPACING
    hyphen1.setAttribute("x",hyphen1XPos + Constants.UNITS);
    hyphen1.setAttribute("y",currentPositionYPos + Constants.UNITS);
    hyphen1.setAttribute("font-size", Constants.POSITION_TITLE_SIZE + Constants.UNITS);
    hyphen1.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    hyphen1.setAttribute("dominant-baseline", "middle");
    hyphen1.setAttribute("fill", Constants.POSITION_COMPANY_COLOR);
    hyphen1.innerHTML = '-';
    svgResume.appendChild(hyphen1);

    // Company Name
    var companyName = document.createElementNS("http://www.w3.org/2000/svg","text");
    const companyNameXPos =  hyphen1XPos + hyphenWidth + Constants.HYPEN_SPACING
    companyName.setAttribute("x",companyNameXPos + Constants.UNITS);
    companyName.setAttribute("y",currentPositionYPos + Constants.UNITS);
    companyName.setAttribute("font-size", Constants.POSITION_TITLE_SIZE + Constants.UNITS);
    companyName.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    companyName.setAttribute("dominant-baseline", "middle");
    companyName.setAttribute("fill", Constants.POSITION_COMPANY_COLOR);
    companyName.innerHTML = position.company;
    svgResume.appendChild(companyName);
    const companyNameWidth = getTextWidthInPoints(
      position.company,
      fontToMeasure
    )

    // Hyphen After Company Name
    var hyphen2 = document.createElementNS("http://www.w3.org/2000/svg","text");
    const hyphen2XPos = companyNameXPos + companyNameWidth + Constants.HYPEN_SPACING
    hyphen2.setAttribute("x",hyphen2XPos + Constants.UNITS);
    hyphen2.setAttribute("y",currentPositionYPos + Constants.UNITS);
    hyphen2.setAttribute("font-size", Constants.POSITION_TITLE_SIZE + Constants.UNITS);
    hyphen2.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    hyphen2.setAttribute("dominant-baseline", "middle");
    hyphen2.setAttribute("fill", Constants.POSITION_COMPANY_COLOR);
    hyphen2.innerHTML = '-';
    svgResume.appendChild(hyphen2);

    // Company Location
    var companyLocation = document.createElementNS("http://www.w3.org/2000/svg","text");
    const companyLocationXPos =  hyphen2XPos + hyphenWidth + Constants.HYPEN_SPACING
    companyLocation.setAttribute("x",companyLocationXPos + Constants.UNITS);
    companyLocation.setAttribute("y",currentPositionYPos + Constants.UNITS);
    companyLocation.setAttribute("font-size", Constants.POSITION_TITLE_SIZE + Constants.UNITS);
    companyLocation.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    companyLocation.setAttribute("dominant-baseline", "middle");
    companyLocation.setAttribute("fill", Constants.POSITION_COMPANY_COLOR);
    companyLocation.innerHTML = position.location;
    svgResume.appendChild(companyLocation);

    // Accomplishments
    var accomplishmentYPos = currentPositionYPos + Constants.POSITION_TITLE_SIZE;
    var accomplishmentFont = Constants.POSITION_ACCOMPLISHMENT_WEIGHT + " "
    accomplishmentFont += Constants.POSITION_ACCOMPLISHMENT_SIZE
    accomplishmentFont += Constants.UNITS + " "
    accomplishmentFont += Constants.SVG_FONT_FAMILY
    for (var j = 0; j < position.accomplishments.length; j++) {
      var accomplishment = position.accomplishments[j];
      const accomplishmentLines = wrapLabel(
        accomplishment,
        Constants.POSITION_ACCOMPLISHMENT_MAX_WIDTH,
        accomplishmentFont
      )
      for (var k = 0; k < accomplishmentLines.length; k++) {
        const accomplismentLine = accomplishmentLines[k];
        var positionAccomplishmentLine = document.createElementNS("http://www.w3.org/2000/svg","text");
        positionAccomplishmentLine.setAttribute("x",Constants.POSITION_ACCOMPLISHMENT_XPOS + Constants.UNITS);
        positionAccomplishmentLine.setAttribute("y",accomplishmentYPos + Constants.UNITS);
        positionAccomplishmentLine.setAttribute("font-size", Constants.POSITION_ACCOMPLISHMENT_SIZE + Constants.UNITS);
        positionAccomplishmentLine.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
        positionAccomplishmentLine.setAttribute("dominant-baseline", "middle");
        positionAccomplishmentLine.setAttribute("fill", Constants.POSITION_ACCOMPLISHMENT_COLOR);
        positionAccomplishmentLine.innerHTML = accomplismentLine;
        svgResume.appendChild(positionAccomplishmentLine)
        accomplishmentYPos += Constants.POSITION_ACCOMPLISHMENT_SIZE;
      }
    }
    currentPositionYPos = accomplishmentYPos + Constants.POSITION_VERTICAL_SPACING;
  }

  // Education Header
  var educationHeader = document.createElementNS("http://www.w3.org/2000/svg","text");
  const educationHeaderYPos = currentPositionYPos + Constants.POSITION_TITLE_SIZE;

  educationHeader.setAttribute("x",Constants.EDUCATION_HEADER_XPOS + Constants.UNITS);
  educationHeader.setAttribute("y",educationHeaderYPos + Constants.UNITS);
  educationHeader.setAttribute("font-size", Constants.EDUCATION_HEADER_SIZE + Constants.UNITS);
  educationHeader.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
  educationHeader.setAttribute("dominant-baseline", "middle");
  educationHeader.setAttribute("fill", Constants.EDUCATION_HEADER_COLOR);
  educationHeader.innerHTML = Constants.EDUCATION_HEADER;
  svgResume.appendChild(educationHeader)

  // Education Instances
  var educationYPos = educationHeaderYPos + Constants.HEADER_SPACING + Constants.EDUCATION_SIZE;
  var educationFont = Constants.EDUCATION_WEIGHT + " "
  educationFont += Constants.EDUCATION_SIZE
  educationFont += Constants.UNITS + " "
  educationFont += Constants.SVG_FONT_FAMILY

  for (var m = 0; m < resume.education.length; m++) {
    var education = resume.education[m];

    // Bullet on Divider
    var educationBulletOnDivider = document.createElementNS("http://www.w3.org/2000/svg","circle");
    educationBulletOnDivider.setAttribute("cx",Constants.VERTICAL_DIVIDER_XPOS + Constants.UNITS);
    educationBulletOnDivider.setAttribute("cy",educationYPos + Constants.UNITS);
    educationBulletOnDivider.setAttribute("r", Constants.EDUCATION_BULLET_RADIUS + Constants.UNITS);
    educationBulletOnDivider.setAttribute("fill", Constants.EDUCATION_BULLET_COLOR)
    svgResume.appendChild(educationBulletOnDivider)

    // Commencement
    var commencementDateRangeFont = Constants.EDUCATION_WEIGHT + " "
    commencementDateRangeFont += Constants.EDUCATION_SIZE
    commencementDateRangeFont += Constants.UNITS + " "
    commencementDateRangeFont += Constants.SVG_FONT_FAMILY
    const commencementDateRangeWidth = getTextWidthInPoints(
      education.commencement,
      commencementDateRangeFont
    )
    var commencementXPos = Constants.VERTICAL_DIVIDER_XPOS - Constants.LEFT_PANEL_MARGIN - commencementDateRangeWidth
    var commencement = document.createElementNS("http://www.w3.org/2000/svg","text");
    commencement.setAttribute("x",commencementXPos + Constants.UNITS);
    commencement.setAttribute("y",educationYPos + Constants.UNITS);
    commencement.setAttribute("font-size", Constants.EDUCATION_SIZE + Constants.UNITS);
    commencement.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    commencement.setAttribute("dominant-baseline", "middle");
    commencement.setAttribute("fill", Constants.EDUCATION_COLOR);
    commencement.innerHTML = education.commencement;
    svgResume.appendChild(commencement)

    // Education Institution
    var educationInstitution = document.createElementNS("http://www.w3.org/2000/svg","text");
    educationInstitution.setAttribute("x",Constants.EDUCATION_XPOS + Constants.UNITS);
    educationInstitution.setAttribute("y",educationYPos + Constants.UNITS);
    educationInstitution.setAttribute("font-size", Constants.EDUCATION_SIZE + Constants.UNITS);
    educationInstitution.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    educationInstitution.setAttribute("dominant-baseline", "middle");
    educationInstitution.setAttribute("fill", Constants.EDUCATION_COLOR);
    educationInstitution.innerHTML = education.institution;
    svgResume.appendChild(educationInstitution);

    // Education Degree
    var educationDegree = document.createElementNS("http://www.w3.org/2000/svg","text");
    educationYPos += Constants.EDUCATION_SIZE
    educationDegree.setAttribute("x",Constants.EDUCATION_XPOS + Constants.UNITS);
    educationDegree.setAttribute("y",educationYPos + Constants.UNITS);
    educationDegree.setAttribute("font-size", Constants.EDUCATION_SIZE + Constants.UNITS);
    educationDegree.setAttribute("font-family",Constants.SVG_FONT_FAMILY);
    educationDegree.setAttribute("dominant-baseline", "middle");
    educationDegree.setAttribute("fill", Constants.EDUCATION_COLOR);
    educationDegree.innerHTML = education.credential;
    svgResume.appendChild(educationDegree);

    educationYPos += Constants.EDUCATION_VERTICAL_SPACING + Constants.ADDRESS_SIZE;

  }

  return(svgResume)
}
