import SvgPage from '../pageobjects/svg.page';
import assert from 'assert';

describe('SVG Resume', () => {
  it('should load', async () => {
    await SvgPage.open();
    await expect(SvgPage.svgResume).toBeExisting();
  });
});

describe('File Menu', () => {
  it('should show/hide based on clicking', async () => {
    await SvgPage.open();
    expect(SvgPage.fileMenuButton).toBeExisting();
    expect(SvgPage.fileMenuItems).toBeExisting();
    const fileMenuButton = await SvgPage.fileMenuButton;
    const fileMenuItems = await SvgPage.fileMenuItems;
    let visibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'hidden');
    fileMenuButton.click();
    visibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'visible');
  });
});
