import Base from './base';

class SvgPage extends Base {
  get svgResume() {
    return $('#svgResume');
  }
  open() {
    return super.open('');
  }
}

export default new SvgPage();
