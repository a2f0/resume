import PdfPage from '../pageobjects/pdf.page';

describe('PDF Resume', () => {
  it('should load', async () => {
    await PdfPage.open();
    await expect(PdfPage.pdfResume).toBeExisting();
  });
});
