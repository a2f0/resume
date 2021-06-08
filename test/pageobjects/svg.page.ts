import Base from './base';

class SvgPage extends Base {
  get leftPartition() {
    return $('#leftPartition');
  }
  get svgResume() {
    return $('#svgResume');
  }
  get darkBackgroundMenuOption() {
    return $('#darkBackgroundMenuOption');
  }
  get lightBackgroundMenuOption() {
    return $('#lightBackgroundMenuOption');
  }
  open() {
    return super.open('');
  }
}

export default new SvgPage();
