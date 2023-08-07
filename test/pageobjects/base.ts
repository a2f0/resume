export default class Base {
  get fileMenuButton(): ChainablePromiseElement {
    return $('#menuButtonFile');
  }
  get fileMenuItems(): ChainablePromiseElement {
    return $('#menuItemsFile');
  }
  get viewMenuButton(): ChainablePromiseElement {
    return $('#menuButtonView');
  }
  get viewMenuItems(): ChainablePromiseElement {
    return $('#menuItemsView');
  }
  get downloadSvgMenuOption(): ChainablePromiseElement {
    return $('#downloadSvgMenuOption');
  }
  get downloadPdfMenuOption(): ChainablePromiseElement {
    return $('#downloadPdfMenuOption');
  }
  open(path: string): ReturnType<WebdriverIO.Browser['url']> {
    return browser.url(`http://localhost:4001/${path}`);
  }
}

const BasePage = new Base();
export {BasePage};
