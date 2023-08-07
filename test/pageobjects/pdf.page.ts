import Base from './base';

class PdfPage extends Base {
  get pdfResume(): ChainablePromiseElement {
    return $('#pdfObject');
  }
  open(): ReturnType<WebdriverIO.Browser['url']> {
    return super.open('pdf');
  }
}

export default new PdfPage();
