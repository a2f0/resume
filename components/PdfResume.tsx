import React, {CSSProperties, useEffect} from 'react';

import {
  selectBackgroundColor,
  selectForegroundColor,
} from '../library/resumeConfigSlice';

import Color from 'color';
import PDFObject from 'pdfobject';
import PdfResumeFactory from '../library/pdfResumeFactory';
import {ResumeConfig} from '../library/resumeConfig';
import {useAppSelector} from '../library/hooks';

export default function PdfResume() {
  const foregroundColor = useAppSelector(selectForegroundColor);
  const backgroundColor = useAppSelector(selectBackgroundColor);
  const preview: CSSProperties = {
    height:
      'calc(100vh - var(--header-height) - var(--header-bottom-border) - var(--footer-height))',
  };

  useEffect(() => {
    const config: ResumeConfig = {
      foregroundColor: Color(foregroundColor),
      backgroundColor: Color(backgroundColor),
    };
    const resumeFactory = new PdfResumeFactory(config);
    const resume = resumeFactory.getResume();
    PDFObject.embed(resume.output('datauristring'), '#pdfObjectContainer', {
      id: 'pdfObject',
    });
  });

  return <div style={preview} id="pdfObjectContainer" />;
}
