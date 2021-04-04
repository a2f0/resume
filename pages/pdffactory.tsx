import React from "react";
import Layout from "../components/Layout"
import PdfResumeFactory from "../components/PdfResumeFactory";

export default function Pdf() {

  return (
    <Layout>
      <PdfResumeFactory/>
    </Layout>
  );
}
