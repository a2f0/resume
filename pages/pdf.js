import React, { useEffect, useState } from "react";
import Layout from "../components/Layout"
import PDFObject from "pdfobject";
import { jsPDF } from "jspdf";
import * as Constants from '../constants'
import resume from '../resume.json';
import svgR from '../util.js'
require('../public/fonts/Roboto-Regular-normal');

export default function Pdf() {

  const preview = {
    height: "calc(100vh - var(--header-height) - var(--footer-height))",
    backgroundColor: "orange"
  }

  const createPDF = () => {

    const options = {
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
    const first_name_options = { baseline: "middle" }
    doc.text(
      resume.first_name,
      Constants.FIRST_NAME_XPOS,
      Constants.FIRST_NAME_YPOS_MIDDLE,
      first_name_options
    );

    // Last Name
    var firstNameWidth = doc.getTextWidth(resume.first_name);
    doc.setTextColor(Constants.LAST_NAME_COLOR)
    const last_name_options = { baseline: "middle" }
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
    const city_state_options = { baseline: "middle" }
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
    const phone_number_options = { baseline: "middle" }
    doc.text(resume.phone_number, Constants.PHONE_NUMBER_XPOS, Constants.PHONE_NUMBER_YPOS, first_name_options );

    // Email Address
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.EMAIL_SIZE)
    doc.setTextColor(Constants.EMAIL_COLOR)
    const email_options = { baseline: "middle" }
    doc.text(resume.email, Constants.EMAIL_XPOS, Constants.EMAIL_YPOS, email_options );

    // Experience Header
    doc.setFont("Helvetica")
    doc.setFontSize(Constants.EXPERIENCE_HEADER_SIZE)
    doc.setTextColor(Constants.HEADER_COLOR)
    const experience_header_options = { baseline: "middle" }
    doc.text(Constants.EXPERIENCE_HEADER, Constants.EXPERIENCE_HEADER_XPOS, Constants.EXPERIENCE_HEADER_YPOS, experience_header_options );

    return doc.output('datauristring');
  }

  useEffect(() => {
    PDFObject.embed(createPDF(), "#pdfObject");
  });

  return (
    <Layout>
      <div style={preview} id="pdfObject"/>
    </Layout>
  );
}
