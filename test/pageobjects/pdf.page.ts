import Base from './base';

class PdfPage extends Base {
  get pdfResume() {
    return $('#pdfObject');
  }
  open() {
    return super.open('pdf');
  }
}

export default new PdfPage();
