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

    // Name
    doc.setFont("Roboto-Regular")
    doc.setFontSize(Constants.NAME_SIZE)
    doc.setTextColor(Constants.NAME_COLOR)
    const first_name_options = { baseline: "middle" }
    doc.text(resume.first_name, Constants.NAME_XPOS, Constants.NAME_YPOS_MIDDLE, first_name_options );

    // Address
    doc.setFont("Roboto-Regular")
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
