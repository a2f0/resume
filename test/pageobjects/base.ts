export default class Base {
  get fileMenuButton() {
    return $('#menuButtonFile');
  }
  get viewMenuButton() {
    return $('#menuButtonFile');
  }
  open(path: string) {
    return browser.url(`http://localhost:4000/${path}`);
  }
}
