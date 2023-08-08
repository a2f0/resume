import Base from './base';

class PdfPage extends Base {
  get pdfResume(): ReturnType<WebdriverIO.Browser['$']> {
    return $('#pdfObject');
  }
  open(): ReturnType<WebdriverIO.Browser['url']> {
    return super.open('pdf');
  }
}

export default new PdfPage();
