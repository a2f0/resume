import Base from './base';

class SvgPage extends Base {
  get leftPartition() {
    return $('#leftPartition');
  }
  get svgResume() {
    return $('#svgResume');
  }
  get darkThemeMenuOption() {
    return $('#darkThemeMenuOption');
  }
  get lightThemeMenuOption() {
    return $('#lightThemeMenuOption');
  }
  open() {
    return super.open('');
  }
}

export default new SvgPage();
