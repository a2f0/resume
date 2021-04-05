import React, { useEffect, CSSProperties } from 'react';
import PDFObject from "pdfobject";
import PdfResumeFactory from '../library/pdfResumeFactory'

export default function PdfResume() {

  const preview: CSSProperties = {
    height: "calc(100vh - var(--header-height) - var(--footer-height))",
    backgroundColor: "orange"
  }

  useEffect(() => {
    var resumeFactory = new PdfResumeFactory();
    const resume = resumeFactory.getResume();
    PDFObject.embed(resume.output('datauristring'), "#pdfObject");
  });

  return (
    <div style={preview} id="pdfObject"/>
  );
}
