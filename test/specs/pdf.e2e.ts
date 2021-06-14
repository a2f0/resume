import * as Constants from '../../constants';
import PdfPage from '../pageobjects/pdf.page';
import assert from 'assert';
import path from 'path';
import waitForFileExists from '../../library/fs';

describe('PDF Resume', () => {
  it('should load', async () => {
    await PdfPage.open();
    await expect(PdfPage.pdfResume).toBeExisting();
  });
  it('should download a pdf', async () => {
    await PdfPage.open();
    expect(PdfPage.fileMenuButton).toBeExisting();
    expect(PdfPage.fileMenuItems).toBeExisting();
    const fileMenuButton = await PdfPage.fileMenuButton;
    const fileMenuItems = await PdfPage.fileMenuItems;
    const downloadPdfMenuOption = await PdfPage.downloadPdfMenuOption;
    let fileVisibility;
    let pdfDownloadVisibility;
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'hidden');
    pdfDownloadVisibility = await downloadPdfMenuOption.getCSSProperty(
      'visibility'
    );
    assert.strictEqual(pdfDownloadVisibility.value, 'hidden');
    fileMenuButton.click();
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'visible');
    pdfDownloadVisibility = await downloadPdfMenuOption.getCSSProperty(
      'visibility'
    );
    assert.strictEqual(pdfDownloadVisibility.value, 'visible');
    downloadPdfMenuOption.click();
    const filePath = path.join(
      Constants.TEST_DOWNLOAD_DIR,
      'dan.sullivan.resume.pdf'
    );
    await browser.call(async () => {
      return await waitForFileExists(filePath, 3000);
    });
  });
});
