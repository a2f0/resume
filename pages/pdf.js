import React, { useEffect, useState } from "react";
import Layout from "../components/Layout"
import PDFObject from "pdfobject";
import { jsPDF } from "jspdf";
import * as Constants from '../constants'
import resume from '../resume.json';
export default function Pdf() {

  const preview = {
    height: "calc(100vh - var(--header-height) - var(--footer-height))",
    backgroundColor: "orange"
  }

  const createPDF = () => {
    console.info("download PDF")
    const options = {
      orientation: 'portrait',
      unit: 'px',
      format: 'letter'
    }
    var doc = new jsPDF(options);

    // First Name
    const first_name_options = { baseline: 'hanging'}
    doc.text(resume.first_name.toUpperCase(), Constants.STARTX, Constants.STARTY, first_name_options );
    const first_name_width = doc.getTextWidth(resume.first_name.toUpperCase());

    // Last Name
    const last_name_options = { baseline: 'hanging'}
    doc.text(resume.last_name.toUpperCase(), Constants.STARTX + first_name_width, Constants.STARTY, last_name_options );


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
