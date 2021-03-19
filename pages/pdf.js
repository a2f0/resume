import React, { useEffect, useState } from "react";
import holyGrail from "../styles/HolyGrail.module.css";
import Layout from "../components/Layout"
import SvgResume from "../components/SvgResume";
import PDFObject from "pdfobject";
import { jsPDF } from "jspdf";

export default function Pdf() {
  // Document
  const STARTX = 10;
  const STARTY = 10;

  const preview = {
    height: "calc(100vh - var(--header-height) - var(--footer-height))",
    backgroundColor: "orange"
  }

  const createPDF = () => {
    console.info("download PDF")
    const options = {
      orientation: 'portrait',
      unit: 'mm',
      format: 'letter'
    }
    var doc = new jsPDF(options);
    doc.text( 'This text is normally aligned.', STARTX, STARTY );
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
