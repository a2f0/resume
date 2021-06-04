export default class Base {
  get fileMenuButton() {
    return $('#menuButtonFile');
  }
  get fileMenuItems() {
    return $('#menuItemsFile');
  }
  async activateFileMenu() {
    await (await this.fileMenuButton).click();
  }
  get viewMenuButton() {
    return $('#menuButtonView');
  }
  get viewMenuItems() {
    return $('#menuItemsView');
  }
  open(path: string) {
    return browser.url(`http://localhost:4001/${path}`);
  }
}
