import * as Constants from './constants'
import resume from './resume.json';

export default function svgResume() {
  // The SVG Itself
  var svgResume = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgResume.setAttribute('id', 'svgResume');

  // Left Partition
  var leftCanvasRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  leftCanvasRect.style.fill = Constants.LEFT_PANEL_COLOR;
  leftCanvasRect.setAttribute("width", '200pt');
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
  firstName.setAttribute("x",Constants.NAME_XPOS + Constants.UNITS);
  firstName.setAttribute("y",Constants.NAME_YPOS_MIDDLE + Constants.UNITS);
  firstName.setAttribute("font-size", Constants.NAME_SIZE + Constants.UNITS);
  firstName.setAttribute("font-family",'roboto-google');
  firstName.setAttribute("dominant-baseline", "middle");
  firstName.setAttribute("fill", Constants.NAME_COLOR);
  firstName.innerHTML = resume.first_name;
  svgResume.appendChild(firstName);

  // Address Line
  var addressLine = document.createElementNS("http://www.w3.org/2000/svg","text");
  addressLine.setAttribute("id","addressLine");
  addressLine.setAttribute("x",Constants.ADDRESS_XPOS + Constants.UNITS);
  addressLine.setAttribute("y",Constants.ADDRESS_YPOS_MIDDLE + Constants.UNITS);
  addressLine.setAttribute("font-size", Constants.ADDRESS_SIZE + Constants.UNITS);
  addressLine.setAttribute("font-family",'roboto-google');
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
  verticalDividerLine.setAttribute("stroke-width", Constants.VERTICAL_DIVIDER_STROKE_WIDTH)
  svgResume.appendChild(verticalDividerLine);

  // Address Separator Line
  var addressSeparatorLine = document.createElementNS("http://www.w3.org/2000/svg","line");
  addressSeparatorLine.setAttribute("id","addressSeparatorLine");
  addressSeparatorLine.setAttribute("x1",Constants.ADDRESS_LINE_X1 + Constants.UNITS);
  addressSeparatorLine.setAttribute("x2",Constants.ADDRESS_LINE_X2  + Constants.UNITS);
  addressSeparatorLine.setAttribute("y1",Constants.ADDRESS_LINE_YPOS + Constants.UNITS);
  addressSeparatorLine.setAttribute("y2",Constants.ADDRESS_LINE_YPOS + Constants.UNITS);
  addressSeparatorLine.setAttribute("stroke", Constants.ADDRESS_LINE_COLOR)
  addressSeparatorLine.setAttribute("stroke-width", Constants.ADDRESS_LINE_STROKE_WIDTH)
  svgResume.appendChild(addressSeparatorLine);

  // Phone Number
  var phoneNumber = document.createElementNS("http://www.w3.org/2000/svg","text");
  phoneNumber.setAttribute("id","addressLine");
  phoneNumber.setAttribute("x",Constants.PHONE_NUMBER_XPOS + Constants.UNITS);
  phoneNumber.setAttribute("y",Constants.PHONE_NUMBER_YPOS + Constants.UNITS);
  phoneNumber.setAttribute("font-size", Constants.PHONE_NUMBER_SIZE + Constants.UNITS);
  phoneNumber.setAttribute("font-family",'roboto-google');
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
  emailAddress.setAttribute("font-family",'roboto-google');
  emailAddress.setAttribute("dominant-baseline", "middle");
  emailAddress.setAttribute("fill", Constants.EMAIL_COLOR);
  emailAddress.innerHTML = resume.email;
  svgResume.appendChild(emailAddress);

  return(svgResume)
}
