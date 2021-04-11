import React, {useEffect, CSSProperties} from 'react';
import PDFObject from 'pdfobject';
import PdfResumeFactory from '../library/pdfResumeFactory';
import {useAppSelector} from '../library/hooks';
import {
  selectForegroundColor,
  selectBackgroundColor,
} from '../library/resumeConfigSlice';
import {ResumeConfig} from '../library/resumeConfig';
import Color from 'color';

export default function PdfResume() {
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  const preview: CSSProperties = {
    height: 'calc(100vh - var(--header-height) - var(--footer-height))',
    backgroundColor: 'orange',
    marginTop: '50px',
  };

  useEffect(() => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
    };
    const resumeFactory = new PdfResumeFactory(config);
    const resume = resumeFactory.getResume();
    PDFObject.embed(resume.output('datauristring'), '#pdfObject');
  });

  return <div style={preview} id="pdfObject" />;
}
