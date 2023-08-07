import Base from './base';

class SvgPage extends Base {
  get leftPartition(): ChainablePromiseElement {
    return $('#leftPartition');
  }
  get svgResume(): ChainablePromiseElement {
    return $('#svgResume');
  }
  get darkThemeMenuOption(): ChainablePromiseElement {
    return $('#darkThemeMenuOption');
  }
  get lightThemeMenuOption(): ChainablePromiseElement {
    return $('#lightThemeMenuOption');
  }
  open(): ReturnType<WebdriverIO.Browser['url']> {
    return super.open('');
  }
}

export default new SvgPage();
